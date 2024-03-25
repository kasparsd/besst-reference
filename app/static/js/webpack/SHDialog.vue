<!--
 * @Author: Bai YanShuo
 * @Date: 2022-07-22 16:18:29
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2023-01-09 16:33:00
 * @FilePath: /BESST/besst-client/src/views/firmware/components/SHDialog.vue
 * @Description: 
-->

<template>
  <el-dialog
    :title.sync="dialogTitle"
    :visible.sync="visible"
    custom-class="edit-dialog"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    class="dialog"
    :show-close="false"
  >
    <div class="item">
      <div class="item-box">
        <label class="label">
          物料号
          <span class="required">*</span>
        </label>
        <el-input v-model="formData.extPartNo" class="input"></el-input>
      </div>
    </div>
    <div class="item">
      <div class="item-box">
        <label class="label">
          硬件版本号
          <span class="required">*</span>
        </label>
        <el-input v-model.trim="formData.hardwareVersion" class="input"></el-input>
      </div>
    </div>
    <div class="item">
      <div class="item-box">
        <label class="label">
          软件版本号
          <span class="required">*</span>
        </label>
        <el-input v-model.trim="formData.softwareVersion" class="input"></el-input>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button :loading="loading" type="preview" @click="onConfirm">提交</el-button>
      <el-button type="primary" @click="onClose">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import ChannelService from 'src/services/firmware/channelService.js'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogTitle: '添加软硬件版本号',
      formData: this.initForm(),
      loading: false
    }
  },
  methods: {
    onConfirm() {
      if (!this.required()) {
        return
      }
      this.loading = true
      ChannelService.articleHsHistory(this.formData)
        .then((res) => {
          if (res.data.code === -2 || res.data.code === 403) {
            throw res.data.message
          }
          this.loading = false
          this.$message({
            message: '保存成功',
            type: 'success'
          })
          this.formData = this.initForm()
          this.$emit('close', true)
        })
        .catch((err) => {
          this.$message({
            message: err,
            type: 'error'
          })
          this.loading = false
        })
    },
    onClose() {
      this.formData = this.initForm()
      this.$emit('close', false)
    },
    required() {
      if (!this.formData.extPartNo) {
        this.$message({
          message: '请输入物料号',
          type: 'warning'
        })
        return false
      }
      if (!this.formData.hardwareVersion) {
        this.$message({
          message: '请输入硬件版本号',
          type: 'warning'
        })
        return false
      }

      if (!this.formData.softwareVersion) {
        this.$message({
          message: '请输入软件版本号',
          type: 'warning'
        })
        return false
      }

      return true
    },
    initForm() {
      return {
        extPartNo: '',
        hardwareVersion: '',
        softwareVersion: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  .el-dialog__body {
    padding: 30px 67px;
  }
  .item {
    margin: 20px 0;
    font-size: 0;
    height: 30px;
    .item-box {
      line-height: 30px;
    }
    .label {
      display: inline-block;
      width: 120px;
      height: 30px;
      vertical-align: middle;
      span {
        color: #e26829;
        display: inline-block;
      }
    }
    .input {
      margin-left: 40px;
      width: 260px;
      i {
        color: #ffffff99;
      }
    }
  }
}
</style>



// WEBPACK FOOTER //
// SHDialog.vue?0f185791