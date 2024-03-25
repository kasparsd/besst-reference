<!--
 * @Author: Bai YanShuo
 * @Date: 2022-06-23 09:13:24
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2022-10-12 17:39:05
 * @FilePath: /BESST/besst-client/src/views/firmware/channel/upload.vue
 * @Description: 
-->
<template>
  <div class="content-wrap">
    <div class="title-content">
      <h3>固件上传</h3>
    </div>
    <div class="form-content" v-loading.body="loading">
      <div class="order-info">
        <div class="item">
          <label class="label">上传软件版本号</label>
          <el-input class="input" v-model="formData.version"></el-input>
        </div>

        <div class="item">
          <label class="label">标签1</label>
          <el-input class="input" v-model.trim="formData.tagOne" placeholder="控制器：轮径 仪表：总档位"></el-input>
        </div>
        <div class="item">
          <label class="label">标签2</label>
          <el-input class="input" v-model.trim="formData.tagTwo" placeholder="控制器：周长 仪表：开机挡位"></el-input>
        </div>
        <div class="item">
          <label class="label">标签3</label>
          <el-input class="input" v-model.trim="formData.tagThree" placeholder="控制器：限速 仪表：背光亮度"></el-input>
        </div>
        <div class="item">
          <label class="label">标签4</label>
          <el-input class="input" v-model.trim="formData.tagFour" placeholder="仪表：ECO/SPORT模式"></el-input>
        </div>
        <div class="item">
          <label class="label">
            固件文件上传
            <span class="required">*</span>
          </label>
          <el-upload
            class="upload-contact"
            :show-file-list="false"
            :action="upload.url"
            :data="upload.params"
            :multiple="false"
            :on-change="file_change"
            :on-success="file_success"
          >
            <el-button type="primary"> 上传 </el-button>
          </el-upload>
        </div>
        <div class="item">
          <label class="label">文件名称</label>
          <el-input :disabled="true" class="input" v-model="upload.fileName"></el-input>
        </div>
        <div class="item">
          <label class="label">CRC校验码</label>
          <el-input :disabled="true" class="input" v-model="formData.checkSum"></el-input>
        </div>
        <div class="item">
          <label class="label">日志 <span class="required">*</span></label>
          <el-input class="input" resize="none" type="textarea" :rows="8" placeholder="" v-model="formData.note"> </el-input>
        </div>
        <div class="item">
          <label class="label">备注</label>
          <el-input class="input" resize="none" type="textarea" :rows="5" placeholder="" v-model="formData.remark"> </el-input>
        </div>
      </div>
      <div class="parts-list">
        <el-button type="button" size="default" :disabled="loading" @click="prev">上一步</el-button>
        <el-button type="primary" @click="save">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Core from 'core/core'
import { mapState } from 'vuex'
import ChannelService from 'src/services/firmware/channelService.js'
export default {
  data() {
    return {
      loading: false,
      formData: this.initForm(),
      //上传
      upload: {
        url: Core.Const.NET.FILE_UPLOAD_END_POINT,
        paramName: 'file',
        params: { token: Core.Data.getToken() },
        fileList: [],
        fileName: ''
      },
      uploadCheck: false
    }
  },
  computed: {
    ...mapState('firmware', ['uploadData', 'currentChannel'])
  },
  activated() {
    this.formData = this.initForm()
    this.initUpload()
  },
  methods: {
    prev() {
      this.$store.dispatch('firmware/prev')
    },
    save() {
      if (this.uploadData.some((res) => res.hardware == '' || res.software == '')) {
        this.$message({
          message: '软硬件版本号缺失',
          type: 'warning'
        })
        return
      }

      const _fileList = this.upload.fileList
      if (_fileList.length <= 0) {
        this.$message({
          message: '请上传固件文件',
          type: 'warning'
        })
        return
      }

      const _file = _fileList[0].response.data.file

      if (!this.checkFile(_fileList[0])) {
        this.initUpload()
        this.formData.checkSum = ''
        this.$message.error('文件类型错误')
        return
      }

      if (!this.formData.version) {
        this.$message({
          message: '请输入软件版本号',
          type: 'warning'
        })
        return
      }

      if (!this.formData.note || this.formData.note === '') {
        this.$message({
          message: '请输入日志',
          type: 'warning'
        })
        return
      }

      try {
        if (!_file) {
          this.$message.warning('上传固件文件失败')
          return
        }
      } catch (err) {
        console.log(err)
      }

      // const _fileName = `${_file.hash}.${_file.ext}`

      // 设置优先级
      let _priority
      switch (this.currentChannel) {
        case 0:
          _priority = 2
          break
        case 1:
          _priority = 3
          break
        case 2:
          _priority = 1
          break
        case 3:
          _priority = 4
          break
        default:
          break
      }

      const _data = this.uploadData.map((res) => {
        return {
          ...res,
          fileName: _fileList[0].name,
          fileHash: _file.hash,
          fileSize: _file.size,
          version: this.formData.version,
          checkSum: this.formData.checkSum,
          remark: this.formData.remark,
          note: this.formData.note,
          priority: _priority,
          tagOne: this.formData.tagOne,
          tagTwo: this.formData.tagTwo,
          tagThree: this.formData.tagThree,
          tagFour: this.formData.tagFour
        }
      })
      // console.log(JSON.stringify(_data))
      ChannelService.uploadFirmware(_data).then(
        (res) => {
          if (res.data.code && (res.data.code === -2 || res.data.code === 403)) {
            this.$message.error(res.data.message || '新建固件失败')
          } else {
            this.$message.success('新建固件成功')
          }
        },
        (err) => {
          this.$message({
            type: 'error',
            message: err.message
          })
          this.loading = false
        }
      )
    },
    file_change(file) {
      this.loading = true
      this.checkFile(file)

      if (!this.uploadCheck) {
        this.initUpload()
        this.formData.checkSum = ''

        this.loading = false
        return
      }

      this.upload.fileList = [file]
      const reader = new FileReader()
      reader.readAsArrayBuffer(file.raw)
      reader.onload = (e) => {
        const arr = Buffer.from(e.target.result)
        this.formData.checkSum = Core.Util.checkCrc(arr)
        console.log('CheckSum', this.formData.checkSum)
      }
      this.loading = false
    },

    checkFile(file) {
      const _name = file.name && file.name.substring(0, file.name.lastIndexOf('.'))
      this.upload.fileName = file.name
      const name_split = _name.split('-')
      const start = name_split[0]
      const end = name_split[1]

      if (start == this.formData.version && this.checkHardWare(end)) {
        this.uploadCheck = true
        return true
      }
      this.uploadCheck = false
      return false
    },
    // 检查选择的硬件版本号是否正确
    checkHardWare(data) {
      return this.uploadData.some((res) => res.hardware == data)
    },
    file_success() {
      if (!this.uploadCheck) {
        this.$message.error('文件类型错误')
        this.initUpload()
        this.formData.checkSum = ''

        this.loading = false
        return
      }

      this.$message.success('上传成功')
      this.loading = false
      // const _file = this.upload.fileList[0].response.data.file
      // const _name = _file.name && _file.name.substring(0, _file.name.lastIndexOf('.'))
      // this.upload.fileName = _file.name
      // this.formData.version = _name
    },
    initUpload() {
      this.upload.fileList = []
      this.upload.fileName = ''
    },
    initForm() {
      return {
        version: '',
        checkSum: '',
        tagOne: '',
        tagTwo: '',
        tagThree: '',
        tagFour: '',
        remark: '',
        note: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content-wrap {
  display: flex;
  flex-direction: column;
  .title-content {
    padding: 0 40px 15px 40px;
    :after {
      content: '';
      width: 100%;
      display: block;
      clear: both;
      height: 1px;
      background: #de5d25;
      margin-top: 10px;
    }
  }

  .form-content {
    padding: 0 40px;
    flex-direction: column;
    height: 100%;
    display: flex;
    .order-info {
      overflow: auto;
      height: 100%;
      width: 100%;
      margin: 20px 0;

      .item {
        width: 50%;
        display: flex;
        margin: 15px auto;
        span {
          color: #e26829;
          display: inline-block;
        }
        .label {
          display: inline-block;
          width: 130px;
          margin-left: 15px;
        }
        .input {
          width: 100%;
          border-radius: 0 0 10px 10px;
        }
      }
      .upload-contact {
        margin-left: 10px;
        display: inline-block;
        width: 100%;
      }
    }
    .parts-list {
      text-align: right;
      padding: 0 40px;
      font-size: 12px;
      height: 50px;
      line-height: 50px;
      width: 100%;
      box-shadow: 0 -1px #2b2f3b;
    }
  }
}
</style>



// WEBPACK FOOTER //
// upload.vue?665221cd