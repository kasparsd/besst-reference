<!--
 * @Author: Bai YanShuo
 * @Date: 2022-05-26 17:51:59
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2022-07-19 17:39:27
 * @FilePath: /BESST/besst-client/src/views/firmware/components/Title.vue
 * @Description: 
-->
<template>
  <div class="title-content">
    <span>{{ title }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.title-content {
  border-bottom: 1px solid #de5d25;
  margin-bottom: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
}
</style>



// WEBPACK FOOTER //
// Title.vue?a2e3e50e