<template>
  <div class="component-list">
    <div class="header">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="开始时间">
          <el-date-picker v-model="startDate" type="date"> </el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期">
          <el-date-picker v-model="endDate" type="date"> </el-date-picker>
        </el-form-item>
        <div class="btn-group-inline">
          <div class="icons">
            <div
              class="icon-item search"
              @click="searchList"
              :title="$t('search.search')"
            ></div>
            <div
              class="icon-item delete"
              @click="ShowBatchDeleteDialog"
              :title="$t('batchDelete')"
              v-if="authList[Core.Const.AUTH_LIST.objectDelete]"
            ></div>
          </div>
        </div>
      </el-form>
    </div>
    <div class="table-wrap">
      <div class="table-content-holder">
        <table class="table-content" border="0" cellspacing="0" cellpadding="0">
          <thead>
            <td v-if="total">
              <el-checkbox v-model="allSelect" @change="selectAll"></el-checkbox>
            </td>
            <td
              v-for="(item, index) in headData"
              :class="{ 'al-right': index === 0 || index === 1 }"
            >
              {{ item }}
            </td>
          </thead>
          <tbody v-if="!loading">
            <tr v-for="item in emptyOrderList">
              <td><el-checkbox v-model="item.select"></el-checkbox></td>
              <td>{{ item.sn.substr(0, 8) }} - {{ item.sn.substr(8) }}</td>
              <td style="text-align: right">
                {{ item.source_id }}
              </td>
              <td>
                {{ item.customer_id }}
              </td>
              <td class="long-td">
                <span v-for="(model, index) in item.item_list">
                  <label>{{ model.item_name }}--{{ model.item_part_no }}</label>
                  <label v-if="index !== 0">/</label>
                </span>
              </td>
              <td style="text-align: right">{{ item.produced }}/{{ item.amount }}</td>
              <td
                :class="{
                  'order-finish': item.status == 1,
                  'order-doing': item.status == 0,
                }"
              >
                {{ item.status | orderStatus(Core.Data.getLang()) }}
              </td>
              <!--<td>-->
              <!--<div class="icon-item delete" @click="ShowBatchDeleteDialog" :title="$t('batchDelete')" v-if="authList[Core.Const.AUTH_LIST.objectDelete]"></div>-->
              <!--</td>-->
            </tr>
          </tbody>
        </table>
        <div class="no-data-content" v-if="emptyOrderList.length <= 0 && !loading">
          {{ $t("noResult") }}
        </div>
        <div class="loading" v-if="loading">
          <img src="../../../assets/images/icon/loading-bars.svg" alt="Loading icon" />
        </div>
      </div>
      <div class="table-footer">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
        <p class="total">{{ $t("total") }}: {{ total }}</p>
      </div>
    </div>

    <!--删除弹框-->
    <el-dialog
      :title="$t('deleteDialog.title')"
      :visible.sync="dialogDeleteVisible"
      size="tiny"
    >
      <span>{{ $t("deleteDialog.content") }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="deleteComponent">{{ $t("yes") }}</el-button>
        <el-button type="primary" @click="dialogDeleteVisible = false">{{
          $t("no")
        }}</el-button>
      </span>
    </el-dialog>

    <el-dialog
      :title="$t('deleteDialog.title')"
      :visible.sync="batchDeleteDialogVisible"
      size="tiny"
    >
      <span>{{ $t("deleteDialog.content") }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="batchDelete">{{ $t("yes") }}</el-button>
        <el-button type="primary" @click="batchDeleteDialogVisible = false">{{
          $t("no")
        }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Core from "core/core";
import ZH from "src/assets/lang/zh";
import EN from "src/assets/lang/en";
import DE from "src/assets/lang/de";
import NL from "src/assets/lang/nl";
import FR from "src/assets/lang/fr";
import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
import XLSX from "xlsx";

export default {
  components: { ElButton },
  name: "emptyOrderList",
  data() {
    return {
      Core: Core,
      headData: [
        "Index",
        "Order No.",
        "Customer Name",
        "Model",
        "Produced/Qty",
        "Status",
      ],
      emptyOrderList: [],
      currentPage: 1,
      size: 50,
      total: 0,
      loading: false,

      dialogDeleteVisible: false,
      selectItem: {},
      startDate: "",
      endDate: "",
      authList: [],
      statusList: [
        { id: -1, value: "All" },
        { id: 1, value: "Finish" },
        { id: 0, value: "In Process" },
      ],
      allSelect: false,

      batchDeleteDialogVisible: false,
      batchDeleteUpdateVisible: false,
    };
  },
  i18n: {
    messages: {
      fr: FR.Component.Component.List,
      en: EN.Component.Component.List,
      zh: ZH.Component.Component.List,
      de: DE.Component.Component.List,
      nl: NL.Component.Component.List,
    },
  },
  beforeMount: function () {
    this.startDate = new Date("2020-06-03");
    this.endDate = new Date("2021-06-03");
  },

  mounted: function () {
    // 国际化
    this.initData();

    // 获取权限
    this.authList = this.$store.state.userAuth;
  },

  methods: {
    initData() {},

    handleCurrentChange(val) {
      this.currentPage = val;
      // this.$router.push({name: 'componentemptyOrderList', query: {orderNo: this.search.source_id, poNo: this.search.part_no, modelName: this.search.item_name, sn: this.search.sn, name: this.search.customer_id, page: this.currentPage}});
      this.getEmptyOrderList();
    },

    searchList() {
      if (this.loading) {
        return false;
      }
      this.currentPage = 1;
      // this.$router.push({name: 'componentemptyOrderList', query: {orderNo: this.search.source_id, poNo: this.search.part_no, modelName: this.search.item_name, sn: this.search.sn, name: this.search.customer_id, page: this.currentPage}});
      this.getEmptyOrderList();
    },

    getEmptyOrderList() {
      let startDate = Core.Util.parseDate(this.startDate) || 0;
      let endDate = Core.Util.parseDate(this.endDate) || 0;

      this.loading = true;
      this.allSelect = false;
      console.log(this.currentPage, "get page");
      // 记录搜索条件
      Core.Api.Order.getNoProducedOrderList(startDate, endDate).then((res) => {
        this.loading = false;
        let emptyOrderList = res.order_list;
        emptyOrderList.forEach((i) => {
          i["select"] = false;
        });
        this.emptyOrderList = emptyOrderList;
        this.total = res.count;
      });
    },

    showDeleteDialog(item) {
      this.selectItem = item;
      this.dialogDeleteVisible = true;
    },

    deleteComponent() {
      Core.Api.Order.deleteNoProducedOrderList().then((res) => {
        this.$message({
          message: "Delete successfully",
          type: "success",
        });
        this.dialogDeleteVisible = false;
        this.getEmptyOrderList();
      });
    },

    goToComponentDetailView(id) {
      this.$router.push({
        name: "componentComponentDetail",
        query: { componentId: id, page: this.currentPage },
      });
    },

    selectAll() {
      let flag = this.allSelect;
      console.log(flag);
      this.emptyOrderList.forEach((i) => {
        i.select = flag;
      });
    },

    ShowBatchDeleteDialog() {
      let selectList = [];
      for (let i = 0; i < this.emptyOrderList.length; i++) {
        let item = this.emptyOrderList[i];
        if (item.select) {
          selectList.push(item.id);
        }
      }
      if (!selectList.length) {
        this.$message.warning("Please select component.");
      } else {
        this.batchDeleteDialogVisible = true;
      }
    },

    batchDelete() {
      if (this.loading) {
        return false;
      }
      this.loading = true;
      let selectIdList = [];
      this.emptyOrderList.filter((item) => {
        if (item.select) {
          selectIdList.push(item.id);
        }
      });
      if (selectIdList.length > 0) {
        Core.Api.request({
          method: "POST",
          url: "/order/production-order/batch_delete",
          data: JSON.stringify(selectIdList),
        }).then(() => {
          this.loading = false;
          this.getEmptyOrderList();
          this.batchDeleteDialogVisible = false;
        });
        //                    Core.Api.Order.deleteNoProducedOrderList(selectIdList).then(res => {
        //                        this.loading = false
        //                        this.getEmptyOrderList();
        //                        this.batchDeleteDialogVisible = false;
        //                    })
      } else {
        this.$message.warning("no checked any oder");
      }
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.component-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .table-wrap {
    flex: 1;
  }
  .header {
    height: auto;
    .el-form-item {
      margin-bottom: 0;
    }
  }
  /*.loading {*/
  /*width: 100%;*/
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  /*}*/
  .no-data-content {
    position: relative;
    height: 100%;
  }
}
</style>



// WEBPACK FOOTER //
// listDelete.vue?13a13ca1