<!--
 * @Author: Bai YanShuo
 * @Date: 2022-07-18 19:29:58
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2023-04-03 18:37:41
 * @FilePath: /BESST/besst-client/src/views/firmware/list.vue
 * @Description: 
-->
<template>
  <div id="firmware">
    <div class="header">
      <label class="title">固件列表</label>
    </div>
    <div class="content-wrap">
      <div class="table-box">
        <div class="table-start">
          <el-form :inline="true" :model="formSearch">
            <el-form-item>
              <el-input v-model.trim="formSearch.partNo" placeholder="物料编号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model.trim="formSearch.sn" placeholder="SN"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model.trim="formSearch.softVersion" placeholder="软件版本号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model.trim="formSearch.hardVersion" placeholder="硬件版本号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model.trim="formSearch.version" placeholder="当前软件版本号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model.trim="formSearch.tagOne" placeholder="标签一"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model.trim="formSearch.tagTwo" placeholder="标签二"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model.trim="formSearch.tagThree" placeholder="标签三"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model.trim="formSearch.tagFour" placeholder="标签四"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="btn-group-inline-icon">
                <div class="icons">
                  <div class="icon-item search" @click="onSearch" title="search"></div>
                  <div class="icon-item clear" @click="onClean" title="clear"></div>
                </div>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="table-main">
          <el-table v-loading.body="loading" :data="tableData" row-key="id" :expand-row-keys="expands" @row-click="clickRowHandle">
            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-form label-position="left" inline class="table-expand">
                  <el-form-item label="SN">
                    <span>{{ scope.row.sn || '-' }}</span>
                  </el-form-item>
                  <el-form-item label="标签一">
                    <span>{{ scope.row.tagOne || '-' }}</span>
                  </el-form-item>
                  <el-form-item label="标签二">
                    <span>{{ scope.row.tagTwo || '-' }}</span>
                  </el-form-item>
                  <el-form-item label="标签三">
                    <span>{{ scope.row.tagThree || '-' }}</span>
                  </el-form-item>
                  <el-form-item label="标签四">
                    <span>{{ scope.row.tagFour || '-' }}</span>
                  </el-form-item>
                  <el-form-item label="日志">
                    <span>{{ scope.row.note || '-' }}</span>
                  </el-form-item>
                  <el-form-item label="备注">
                    <span>{{ scope.row.remark || '-' }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column type="index" width="55"> </el-table-column>
            <el-table-column key="23" label="操作" width="160">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click.stop="onEdit(scope.row)"> 编辑 </el-button>
                <el-button v-if="Core.Data.getUser().id == '24'" type="text" size="small" @click.stop="onDelete(scope.row)"> 删除 </el-button>
                <el-button type="text" size="small" @click.stop="onDownLoad(scope.row.downloadUrl, scope.row.fileName)"> 下载 </el-button>
              </template>
            </el-table-column>
            <el-table-column prop="sn" label="SN" width="200" v-if="formSearch.sn">
              <template slot-scope="scope">
                <span>{{ scope.row.sn || '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="partNo" label="物料编号" width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.partNo || '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="订单号" width="200">
              <template slot-scope="scope">
                <span>{{ scope.row.orderNo || '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="itemName" label="产品型号" width="250"> </el-table-column>
            <el-table-column prop="itemCategoryName" label="产品类别" width="250"> </el-table-column>
            <el-table-column prop="software" label="软件版本号" width="250"> </el-table-column>
            <el-table-column prop="hardware" label="硬件版本号" width="250"> </el-table-column>
            <el-table-column prop="fileName" label="文件名称" width="250"> </el-table-column>
            <el-table-column prop="version" label="当前软件版本号" width="250"> </el-table-column>
            <el-table-column prop="createdTime" label="上传时间" width="250">
              <template slot-scope="scope">
                <span>{{ scope.row.createdTime | dateFormatOther('Y-m-d H:i:s') || '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="createdUserName" label="上传人" width="250"> </el-table-column>
          </el-table>
        </div>
        <div class="table-end">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="10"
            layout="prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
    <!-- 添加or修改弹窗 -->
    <el-dialog :title.sync="dialogTitle" :visible.sync="dialogVisible" custom-class="edit-dialog" class="dialog">
      <div class="item">
        <label class="title">
          日志
          <span class="required">*</span>
        </label>
        <div class="content">
          <el-input class="input" resize="none" type="textarea" :rows="10" placeholder="" v-model="formData.note"> </el-input>
        </div>
      </div>
      <div class="item">
        <label class="title">
          备注
          <span class="required">*</span>
        </label>
        <div class="content">
          <el-input class="input" resize="none" type="textarea" :rows="5" placeholder="" v-model="formData.remark"> </el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="preview" @click="dialogConfirm">提交</el-button>
        <el-button type="primary" @click="dialogVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Core from 'core/core'
import lang from 'src/mixins/lang'
import ChannelService from 'src/services/firmware/channelService.js'
import fs from 'file-saver'
export default {
  mixins: [lang],
  data() {
    return {
      tableData: [],
      formSearch: this.initForm(),
      currentPage: 1,
      total: 0,
      loading: false,
      formData: {},
      dialogVisible: false,
      dialogTitle: '',
      expands: [],
      Core: Core
    }
  },
  mounted() {
    this.getTableList()
  },
  methods: {
    clickRowHandle(row, column, event) {
      if (this.expands.includes(row.id)) {
        this.expands = this.expands.filter((val) => val !== row.id)
      } else {
        this.expands.push(row.id)
      }
    },
    onSearch() {
      this.currentPage = 1
      this.getTableList()
    },
    onClean() {
      this.currentPage = 1
      const searchParams = this.initForm()
      this.formSearch = searchParams
      this.getTableList()
    },
    onDownLoad(url, fileName) {
      if (!url) return
      fs.saveAs(url, fileName)
    },
    onEdit(row) {
      this.formData = JSON.parse(JSON.stringify(row))
      this.dialogTitle = '编辑'
      this.dialogVisible = true
    },
    onDelete(row) {
      this.$confirm('此操作将删除数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        ChannelService.deleteFirmware(row.id)
          .then((res) => {
            if (res.data.code === -2) {
              throw res.data.message
            }
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.onSearch()
          })
          .catch((err) => {
            this.$message({
              message: err,
              type: 'error'
            })
          })
      })
    },
    // 弹窗确认
    dialogConfirm() {
      if (!this.required()) {
        return
      }
      this.loading = true
      ChannelService.saveFirmware(this.formData)
        .then((res) => {
          if (res.data.code === -2) {
            throw res.data.message
          }
          this.loading = false
          this.dialogVisible = false
          this.$message({
            message: '保存成功',
            type: 'success'
          })
          this.onSearch()
        })
        .catch((err) => {
          this.$message({
            message: err,
            type: 'error'
          })
          this.dialogWarehouseVisible = false
          this.loading = false
        })
    },
    // 弹窗必填
    required() {
      if (!this.formData.note || this.formData.note === '') {
        this.$message({
          message: '请输入日志',
          type: 'warning'
        })
        return false
      }
      return true
    },
    // 分页
    handleCurrentChange(val) {
      this.currentPage = val
      this.getTableList()
    },
    getTableList() {
      const searchParams = {}
      Object.keys(this.formSearch).forEach((key) => {
        if (!this.formSearch[key]) return
        searchParams[key] = this.formSearch[key]
      })

      this.loading = true
      ChannelService.firmware({
        ...searchParams,
        page: this.currentPage - 1,
        pageSize: 10
      }).then(
        (res) => {
          const { content, totalElements, code, message } = res.data
          if (code === 1) {
            this.$message({
              type: 'warning',
              message
            })
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
        partNo: '',
        sn: '',
        tagFour: '',
        tagOne: '',
        tagThree: '',
        tagTwo: '',
        softVersion: '',
        hardVersion: '',
        version: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.table-expand {
  font-size: 0;
  label {
    width: 90px;
  }

  .el-form-item {
    margin-right: 15px;
    margin-bottom: 0;
    min-width: 250px;
  }
}
.content-wrap {
  display: flex;
}
.table-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  flex: 1;
  overflow-x: hidden;
  .table-start {
    padding-left: 10px;
    height: 50px;
    .el-form--inline {
      display: flex;
      height: 100%;
    }
  }
  .table-main {
    flex: 1;
    overflow: auto;

    flex: 1;
    .el-table {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
  .table-end {
    height: 60px;
    padding: 15px 40px 0 40px;
  }
}
.dialog {
  overflow: hidden;
  .el-dialog__body {
    font-size: 0;
    padding: 30px 20px 30px 66px;
  }
  .item {
    display: flex;
    span {
      color: #e26829;
      display: inline-block;
    }
    .land {
      flex: 1;
    }
    .title {
      display: flex;
      width: 80px;
      margin: 10px;
    }
    .content {
      margin: 10px;
      flex: 1;
    }
  }
}
</style>



// WEBPACK FOOTER //
// list.vue?04fd0c23