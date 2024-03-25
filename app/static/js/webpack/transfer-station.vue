<!--
 * @Author: Bai YanShuo
 * @Date: 2022-06-16 13:59:34
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2022-06-29 12:29:12
 * @FilePath: /BESST/besst-client/src/views/firmware/channel/order.vue
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
      <div class="table-main">
        <el-table
          @selection-change="selectionChange"
          v-loading.body="loading"
          :data="tableData"
        >
          <el-table-column type="index" width="55"> </el-table-column>
          <el-table-column type="selection"> </el-table-column>
          <el-table-column
            v-if="currentChannel == 2"
            prop="sn"
            label="SN"
            show-overflow-tooltip
            width="150"
          >
            <template slot-scope="scope">
              {{ scope.row.sn || "-" }}
            </template>
          </el-table-column>
          <el-table-column
            v-if="currentChannel == 0"
            label="订单号"
            show-overflow-tooltip
            width="150"
          >
            <template slot-scope="scope">
              <span>{{ (scope.row.order && scope.row.order.sn) || "-" }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="partNo" label="物料号" show-overflow-tooltip width="150">
            <template slot-scope="scope">
              {{ scope.row.partNo || "-" }}
            </template>
          </el-table-column>
          <el-table-column prop="hardware" label="硬件版本号" min-width="220">
          </el-table-column>
          <el-table-column prop="software" label="软件版本号" min-width="220">
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
      <div class="table-end"></div>
    </div>
    <div class="right table-box">
      <Title />
      <div class="table-main">
        <el-table :data="multipleSelection">
          <el-table-column type="index" width="55"> </el-table-column>
          <el-table-column
            v-if="currentChannel == 2"
            prop="sn"
            label="SN"
            show-overflow-tooltip
            width="150"
          >
            <template slot-scope="scope">
              {{ scope.row.sn || "-" }}
            </template>
          </el-table-column>
          <el-table-column
            v-if="currentChannel == 0"
            label="订单号"
            show-overflow-tooltip
            width="150"
          >
            <template slot-scope="scope">
              <span>{{ (scope.row.order && scope.row.order.sn) || "-" }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="partNo" label="物料号" show-overflow-tooltip width="150">
            <template slot-scope="scope">
              {{ scope.row.partNo || "-" }}
            </template>
          </el-table-column>
          <el-table-column prop="hardware" label="硬件版本号" min-width="220">
          </el-table-column>
          <el-table-column prop="software" label="软件版本号" min-width="220">
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
        <el-button type="button" size="default" :disabled="loading" @click="prev"
          >上一步</el-button
        >
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
    ...mapState("firmware", ["transferStationData", "currentChannel"]),
  },
  watch: {
    transferStationData: {
      handler(newVal, oldVal) {
        if (!newVal.some((item) => oldVal.includes(item))) {
          this.tableData = [];
          this.multipleSelection = [];
        }
      },
      deep: true,
    },
  },
  activated() {
    this.getTableList();
  },
  methods: {
    prev() {
      this.$store.dispatch("firmware/prev");
    },
    next() {
      this.$store.dispatch("firmware/setUploadData", this.multipleSelection);
      this.$store.dispatch("firmware/next");
    },
    onAdd(row) {
      const check = this.multipleSelection.some((item) => item._id === row._id);
      if (check) {
        this.$message.error("该行已存在");
        return;
      }
      this.multipleSelection.push(row);
    },
    onAddSelection() {
      this.selection.forEach((item) => {
        if (!this.multipleSelection.some((res) => res._id === item._id)) {
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
    getTableList() {
      this.loading = true;
      ChannelService.channelStep(this.transferStationData).then(
        (res) => {
          const _data = [];
          res.data.forEach((res) => {
            const _fd = res.softHardWareVersions.map((v) => {
              // 生成不重复随机数
              const _sn = Math.floor(Math.random() * 1000000);
              return {
                _id: `${res.ext_part_no}${v[0]}${v[1]}${_sn}`,
                software: v[0],
                hardware: v[1],
                partNo: res.ext_part_no,
                sn: res.sn,
                orderId: res.orderId,
                order: res.order,
              };
            });
            _data.push(..._fd);
          });
          this.tableData = _data;
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
    // 添加软硬件版本
    dialogAdd() {
      this.shDialog = true;
    },
    shDialogClose(flag) {
      if (flag) this.getTableList();
      this.shDialog = false;
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
</style>



// WEBPACK FOOTER //
// transfer-station.vue?3ad9998a