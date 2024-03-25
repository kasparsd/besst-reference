<!--
 * @Author: Bai YanShuo
 * @Date: 2022-10-31 13:10:55
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2022-11-02 13:11:12
 * @FilePath: /BESST/besst-client/src/components/tool/printPreview.vue
 * @Description: 
-->
<template>
  <EVDialog :title="title" :visible="visible" width="630px" @close="close">
    <template #content>
      <div id="table" class="table print-pi-wrap" style="display: block !important" v-for="(tab, index) in table" :key="index">
        <div class="printHead">
          <h3 class="title">{{ tab.title }}</h3>
          <hr style="margin-bottom: 15px" />
          <div class="row" :gutter="20">
            <div class="col-box" v-for="(item, idx) in tab.items" :key="idx">
              <label style="width: 50%" class="col-label" :span="6" :offset="0">
                {{ item.label }}
              </label>
              <span class="col-value" :span="6" :offset="0">
                {{ item.value || '-' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #btn>
      <el-button type="primary" @click="close">Cancel</el-button>
      <el-button type="primary" @click="print">Print</el-button>
    </template>
  </EVDialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Print'
    }
  },
  data() {
    return {
      visible: false,
      table: []
    }
  },
  methods: {
    print() {
      let print = 'div.table'
      let mode = 'iframe'
      let extraCss = ''
      let close = false
      let retainAttr = ['class', 'id', 'style', 'on']
      let headElements = '<meta charset="utf-8" />,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>'

      let options = {
        mode: mode,
        popClose: close,
        extraCss: extraCss,
        retainAttr: retainAttr,
        extraHead: headElements
      }
      $(print).printArea(options)
    },
    close() {
      this.visible = false
    },
    show(data) {
      this.$nextTick(() => {
        this.table = data
      })
      this.visible = true
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.table {
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .row {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    .col-box {
      flex: 0 0 50%;
      display: flex;
      .col-label {
        margin-bottom: 10px;
        font-weight: bold;
        flex: 1;
      }
      .col-value {
        margin-bottom: 10px;
        font-weight: normal;
        flex: 1;
      }
    }
  }
}
</style>



// WEBPACK FOOTER //
// printPreview.vue?fa087b36