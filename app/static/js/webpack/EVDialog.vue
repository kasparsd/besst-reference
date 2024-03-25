<!--
 * @Author: Bai YanShuo
 * @Date: 2022-09-15 10:08:29
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2022-11-02 13:15:37
 * @FilePath: /BESST/besst-client/src/components/EVDialog.vue
 * @Description: 
-->
<template>
  <el-dialog
    :append-to-body="true"
    class="ev-dialog"
    :close-on-click-modal="clickModal"
    :close-on-press-escape="false"
    :show-close="false"
    :top="top"
    :visible="visible"
    :width="width"
    @close="$emit('close')"
  >
    <div slot="title" class="title">
      <div class="h-12 bg-base-color pl-5 flex items-center">
        <h3 class="text-white">{{ title }}</h3>
      </div>
    </div>
    <div class="content py-0 px-3">
      <slot name="content" />
    </div>
    <div slot="footer" class="dialog-footer">
      <slot name="btn" />
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'EVDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '380px'
    },
    title: {
      type: String,
      default: ''
    },
    clickModal: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '15vh'
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__header {
  padding: 0;
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
    font-size: 24px;
  }

  .el-dialog__headerbtn {
    top: 12px;
  }
  .el-dialog__headerbtn:hover {
    .el-dialog__close {
      color: #e5e7eb;
    }
  }
}

.ev-dialog {
  .el-dialog {
    border-radius: 12px;
    overflow: hidden;
  }

  .content {
    .row:last-child {
      margin-bottom: 10px;
    }
    .select {
      width: 320px;
    }
  }
  .dialog-footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>



// WEBPACK FOOTER //
// EVDialog.vue?8e752d94