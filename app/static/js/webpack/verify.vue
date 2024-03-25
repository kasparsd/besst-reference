<template>
  <div class="verify">
    <div class="header">
      <label class="title">固件列表</label>
    </div>
    <div class="search-header">
      <el-form :inline="true" :model="formSearch" class="list-form-inline">
        <el-form-item>
          <el-input v-model.trim="formSearch.hard_ver" placeholder="硬件版本号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model.trim="formSearch.sn" placeholder="SN"></el-input>
        </el-form-item>
        <div class="btn-group-inline-icon">
          <div class="icons">
            <div class="icon-item search" @click="onSearch" title="search"></div>
            <div class="icon-item clear" @click="onClean" title="clear"></div>
          </div>
        </div>
      </el-form>
    </div>
    <div class="table-wrap" v-loading.body="loading">
      <div class="table-content-holder">
        <div class="no-data-content" v-if="tableData.length <= 0 && !loading">noResult</div>
        <table class="table-content" border="0" cellspacing="0" cellpadding="0" v-else>
          <thead>
            <td v-for="(item, index) in headData" :key="index">{{ item }}</td>
          </thead>
          <tbody v-if="!loading && tableData.length > 0">
            <tr v-for="(item, index) in tableData" :key="index">
              <td>
                <el-button type="text" size="small" @click.stop="onDownLoad(item.downloadUrl, item.filename)"> 下载 </el-button>
              </td>
              <td>{{ item.level }}</td>
              <td>{{ item.firmwareName }}</td>
              <td>{{ item.hardware }}</td>
              <td>{{ item.software }}</td>
              <td>{{ item.version }}</td>
              <td>{{ item.filename }}</td>
              <td>{{ item.checkSum }}</td>
              <td>{{ item.remark }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-footer">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
        <p class="total">total: {{ total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelService from 'src/services/firmware/channelService.js'
import fs from 'file-saver'
export default {
  data() {
    return {
      loading: false,
      headData: [],
      tableData: [],
      currentPage: 1,
      total: 0,
      // 查询条件
      formSearch: this.initForm()
    }
  },
  mounted() {
    // this.gettableData();
    this.headData = ['下载', '模式', '固件名称', '硬件版本号', '软件版本号', '版本号', '文件名', 'CRC校验码', '备注']
  },
  methods: {
    // 搜索
    onSearch() {
      this.currentPage = 1
      this.gettableData()
    },
    onClean() {
      this.currentPage = 1
      const searchParams = this.initForm()
      this.formSearch = searchParams
      this.gettableData()
    },
    // 分页
    handleCurrentChange(val) {
      this.currentPage = val
      this.gettableData()
    },
    onDownLoad(url, fileName) {
      if (!url) return
      fs.saveAs(url, fileName)
    },
    gettableData() {
      this.loading = true

      const searchParams = {}
      Object.keys(this.formSearch).forEach((key) => {
        if (!this.formSearch[key]) return
        searchParams[key] = this.formSearch[key]
      })
      console.log(searchParams)
      ChannelService.upgradeList({
        ...searchParams,
        page: this.currentPage - 1,
        pageSize: 10
      }).then(
        (res) => {
          const { content, totalElements, code, message } = res.data
          if ([1, 5].includes(code)) {
            this.$message({
              type: 'warning',
              message
            })
            this.tableData = []
            this.loading = false
            return
          }
          this.tableData = content
          this.total = totalElements
          this.loading = false
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
    initForm() {
      return {
        hard_ver: '',
        sn: ''
      }
    }
  },
  watch: {}
}
</script>

<style lang="scss" rel="stylesheet/scss">
.verify {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  span.required {
    color: #e26829;
    display: inline-block;
  }

  .list-form-inline {
    height: 100%;
    line-height: 50px;
    .el-form-item {
      margin-right: 2px !important;
      margin-bottom: 0;
    }
    .el-form-item__label {
      color: #fff;
      padding: 11px 12px;
    }
    .el-form-item__content {
      width: 180px !important;
    }
  }
  .table-wrap {
    height: calc(100% - 112px);
    .long-td {
      max-width: 270px;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: left;
    }
  }

  .dialog-warehouse {
    overflow: hidden;
    .el-dialog__body {
      font-size: 0;
      padding: 30px 20px 30px 66px;
    }
    .item {
      width: 50%;
      line-height: 30px;
      display: inline-block;
      .land {
        width: 250px;
      }
      .title {
        display: inline-block;
        width: 80px;
      }
      .content {
        margin: 10px;
        display: inline-block;
        width: 250px;
      }
    }
  }
}
</style>



// WEBPACK FOOTER //
// verify.vue?4ebd266a