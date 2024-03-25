<!--
 * @Author: Bai YanShuo
 * @Date: 2021-11-04 15:41:36
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2021-11-04 16:08:11
 * @FilePath: /besst-client/src/views/assembler/order/component/dialog-error-message.vue
 * @Description: 
-->
<template>
  <el-dialog class="dialog" :title="$t('errorLog')" :visible.sync="isVisible" size="large">
    <el-table :highlight-current-row="true" :max-height="540" :data="tableData">
      <el-table-column :width="item.width" v-for="(item, index) in HeadData" :key="index" :prop="item.name" :label="item.label"></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogErrorMessage',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      HeadData: [
        {
          name: 'row',
          label: 'row'
        },
        {
          name: 'broken',
          label: 'broken'
        },
        {
          name: 'empty',
          label: 'empty'
        },
        {
          name: 'exist',
          label: 'exist'
        },
        {
          name: 'unexist',
          label: 'unexist'
        },
        {
          name: 'unmatch',
          label: 'unmatch'
        },
        {
          name: 'used',
          label: 'used'
        }
      ],
      isVisible: false,
      tableData: []
    }
  },
  methods: {
    // 关闭
    close() {
      this.isVisible = false
    },
    // 打开
    show({ errorList }) {
      this.tableData = errorList
      this.isVisible = true
    }
  }
}
</script>

<style lang="scss" scoped></style>



// WEBPACK FOOTER //
// dialog-error-message.vue?01b355d6