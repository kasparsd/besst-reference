<!--
 * @Author: Bai YanShuo
 * @Date: 2022-05-23 10:39:35
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2022-07-19 16:09:36
 * @FilePath: /BESST/besst-client/src/views/firmware/index.vue
 * @Description: 
-->
<template>
  <div id="firmware">
    <div class="header">
      <Steps :currentStep="currentStep" :totalSteps="currentSteps.length" :stepsLabel="currentSteps" />
    </div>
    <keep-alive :max="4">
      <component :is="cmpName"></component>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Steps from './components/Steps'
import Order from './channel/order'
import TransferStation from './channel/transfer-station'
import SoftHardware from './channel/soft-hardware'
import SN from './channel/sn'
import Material from './channel/material'

import Upload from './channel/upload'
export default {
  components: {
    Steps,
    Order,
    TransferStation,
    SoftHardware,
    Material,
    SN,
    Upload
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('firmware', ['steps', 'currentStep', 'currentSteps', 'cmpName'])
  },
  watch: {
    '$route.params.channel': {
      handler(val) {
        this.$store.dispatch('firmware/setChannel', val - 0)
      },
      immediate: true
    }
  },
  mounted() {
    console.log(this.currentStep)
  },
  methods: {
    onChange(index) {
      // 父组件获取切换后的选中步骤
      console.log('parentIndex:', index)
      this.$store.dispatch('firmware/changeStep', index)
    }
  }
}
</script>

<style lang="scss" scoped>
#firmware {
  width: 100%;
}
</style>



// WEBPACK FOOTER //
// index.vue?355df52a