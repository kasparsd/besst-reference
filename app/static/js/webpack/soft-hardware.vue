<!--
 * @Author: Bai YanShuo
 * @Date: 2022-06-15 15:57:25
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2022-07-22 16:46:07
 * @FilePath: /BESST/besst-client/src/views/firmware/channel/soft-hardware.vue
 * @Description: 
-->
<template>
  <div class="content-wrap">
    <div class="left table-box">
      <Title>
        <div>
          <el-button
            type="button"
            size="mini"
            :disabled="selection.length === 0"
            @click="onAddSelection"
            >批量添加</el-button
          >
          <el-button type="button" size="mini" @click="dialogAdd"
            >添加软硬件版本</el-button
          >
        </div>
      </Title>
      <div class="table-start">
        <el-form :inline="true" :model="formSearch">
          <el-form-item>
            <el-input
              v-model.trim="formSearch.hardVersion"
              placeholder="硬件版本号"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model.trim="formSearch.softVersion"
              placeholder="软件版本号"
            ></el-input>
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
        <el-table
          @selection-change="selectionChange"
          v-loading.body="loading"
          :data="tableData"
        >
          <el-table-column type="index" width="55"> </el-table-column>
          <el-table-column type="selection"> </el-table-column>
          <el-table-column prop="extPartNo" :label="$t('partNo')" width="200">
          </el-table-column>
          <el-table-column prop="hardwareVersion" label="硬件版本号" min-width="220">
          </el-table-column>
          <el-table-column prop="softwareVersion" label="软件版本号" min-width="220">
          </el-table-column>
          <el-table-column label="操作" width="65" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="onAdd(scope.row)">
                添加
              </el-button>
            </template>
          </el-table-column>
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
    <div class="right table-box">
      <Title />
      <div class="table-main">
        <el-table :data="multipleSelection">
          <el-table-column type="index" width="55"> </el-table-column>
          <el-table-column prop="extPartNo" :label="$t('partNo')" width="200">
          </el-table-column>
          <el-table-column prop="hardwareVersion" label="硬件版本号" min-width="220">
          </el-table-column>
          <el-table-column prop="softwareVersion" label="软件版本号" min-width="220">
          </el-table-column>
          <el-table-column label="操作" width="65" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="onDel(scope.$index)">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="table-end text-right">
        <el-button
          type="button"
          size="default"
          :disabled="loading || multipleSelection.length === 0"
          @click="next"
          >下一步</el-button
        >
      </div>
    </div>
    <SHDialog :visible="shDialog" @close="shDialogClose" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import lang from "src/mixins/lang";
import ChannelService from "src/services/firmware/channelService.js";
import Title from "src/views/firmware/components/Title.vue";
import SHDialog from "src/views/firmware/components/SHDialog.vue";
export default {
  mixins: [lang],
  data() {
    return {
      tableData: [],
      formSearch: this.initForm(),
      currentPage: 1,
      total: 0,
      multipleSelection: [],
      selection: [],
      loading: false,
      shDialog: false,
    };
  },
  components: {
    Title,
    SHDialog,
  },
  computed: {
    ...mapState("firmware", ["currentChannel"]),
  },
  watch: {
    "$route.params.channel": {
      handler(val) {
        this.tableData = [];
        this.multipleSelection = [];
        // this.onClean()
      },
      immediate: true,
    },
  },
  // activated() {
  //   this.getTableList()
  // },
  methods: {
    next() {
      const data = this.multipleSelection.map((res) => {
        return {
          software: res.softwareVersion,
          hardware: res.hardwareVersion,
          partNo: res.extPartNo,
        };
      });
      this.$store.dispatch("firmware/setUploadData", data);
      this.$store.dispatch("firmware/next");
    },
    onChange(index) {
      // 父组件获取切换后的选中步骤
      console.log("parentIndex:", index);
    },
    onSearch() {
      this.currentPage = 1;
      this.getTableList();
    },
    onClean() {
      this.currentPage = 1;
      const searchParams = this.initForm();
      this.formSearch = searchParams;
      this.getTableList();
    },
    onAdd(row) {
      const check = this.multipleSelection.some((item) => item.id === row.id);
      if (check) {
        this.$message.error("该行已存在");
        return;
      }
      this.multipleSelection.push(row);
    },
    onAddSelection() {
      this.selection.forEach((item) => {
        if (!this.multipleSelection.some((res) => res.id === item.id)) {
          this.multipleSelection.push(item);
        }
      });
    },
    selectionChange(val) {
      this.selection = val;
    },
    onDel(index) {
      this.multipleSelection.splice(index, 1);
    },
    // 添加软硬件版本
    dialogAdd() {
      this.shDialog = true;
    },
    shDialogClose(flag) {
      if (flag) this.onSearch();
      this.shDialog = false;
    },
    // 分页
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTableList();
    },
    getTableList() {
      const searchParams = {};
      Object.keys(this.formSearch).forEach((key) => {
        if (!this.formSearch[key]) return;
        searchParams[key] = this.formSearch[key];
      });

      this.loading = true;
      ChannelService.channle(
        {
          ...searchParams,
          page: this.currentPage - 1,
          pageSize: 10,
        },
        this.currentChannel + 1
      ).then(
        (res) => {
          const { content, totalElements, code, message } = res.data;
          if (code === 1) {
            this.$message({
              type: "warning",
              message,
            });
            this.loading = false;
            return;
          }
          this.tableData = content;
          this.total = totalElements;
          this.loading = false;
        },
        (err) => {
          this.$message({
            type: "error",
            message: err.message,
          });
          this.loading = false;
        }
      );
    },
    initForm() {
      return {
        sn: "",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.content-wrap {
  display: flex;
  .left {
    flex: 6;
    height: 100%;
    overflow: hidden;
  }
  .right {
    flex: 4;
    height: 100%;
    overflow: hidden;
  }
}
.table-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;

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
.dialog-category {
  .el-dialog--large {
    width: 1100px;
  }
  .header {
    .search-content {
      width: 200px;
      margin-right: 10px;
    }
    .search-btn {
      position: absolute;
      top: 15px;
      left: 250px;
      width: 30px;
      height: 30px;
    }
  }
}
</style>



// WEBPACK FOOTER //
// soft-hardware.vue?03c08462