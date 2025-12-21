<!--
 * @Author: Bai YanShuo
 * @Date: 2025-09-22 10:23:27
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2025-10-16 21:27:06
 * @FilePath: /BESST/besst-client/src/components/tool/weighingSensor.vue
 * @Description: 
-->
<template>
  <div class="weighing">
    <div class="weighing-content">
      <div class="title">
        <div style="display: flex; align-items: center">
          <img class="icon" src="../../assets/images/icon/icon-hmi.png" />{{ $t('weighingSensor') }}
        </div>
      </div>
      <!--基本数据-->
      <div class="info option">
        <div class="note-title">
          <label class="title">{{ $t('cNam.mainData') }}</label>
        </div>
        <div class="info-left">
          <div class="item">
            <label class="label">传感器实际值</label>
            <el-input class="input" v-model="readInfo.actualValue" disabled></el-input>
          </div>
          <div class="item">
            <label class="label">ID</label>
            <el-input class="input" v-model="readInfo.idNo" disabled></el-input>
          </div>
          <div class="item">
            <label class="label">{{ $t('cNam.hardwareVersion') }}</label>
            <el-input class="input" v-model="readInfo.hardVersion" disabled></el-input>
          </div>
          <div class="item">
            <label class="label">{{ $t('cNam.softwareVersion') }}</label>
            <el-input class="input" v-model="readInfo.softVersion" disabled></el-input>
          </div>
          <div class="item">
            <label class="label">BOOT号</label>
            <el-input class="input" v-model="readInfo.bootNo" disabled></el-input>
          </div>
          <div class="item">
            <label class="label">材料号</label>
            <el-input class="input" v-model="readInfo.materialNo" disabled></el-input>
          </div>
        </div>
        <div class="info-right">
          <div class="item">
            <label class="label">USB HID</label>
            <label class="tip" :class="{ connect: isConnected }"></label>
          </div>
          <div class="item">
            <label class="label">称重</label>
            <el-input class="input" v-model="actualWeight" disabled></el-input>
          </div>
        </div>
      </div>
    </div>
    <!-- 加载 -->
    <div class="loading" v-if="loading">
      <img src="../../assets/images/icon/loading-bars.svg" alt="Loading icon" />
    </div>
  </div>
</template>

<script>
import usbSDK from 'besst-usb-sdk'
import ZH from 'src/assets/lang/zh'
import EN from 'src/assets/lang/en'
import DE from 'src/assets/lang/de'
import NL from 'src/assets/lang/nl'
import FR from 'src/assets/lang/fr'
import vueLoading from 'vue-loading-template'
export default {
  name: 'weighing',
  components: {
    vueLoading
  },
  computed: {
    isConnected() {
      return usbSDK.client.isConnected()
    }
  },
  data() {
    return {
      /// 实际重量
      actualWeight: '',
      readInfo: {
        /// 传感器实际值
        actualValue: '',
        idNo: '',
        hardVersion: '',
        softVersion: '',
        bootNo: '',
        /// 材料号
        materialNo: ''
      },
      loading: false
    }
  },
  mounted() {
    this.listen()
  },
  beforeDestroy: function () {
    this.removeListener()
  },
  methods: {
    listen() {
      usbSDK.client.events.on('meituan-data', (res) => {
        console.log('meituan-data:' + `${JSON.stringify(res)}`)
        // 根据Id处理不同类型的数据
        switch (res.canId) {
          case 0x283: // 643 - 版本信息
            this.handleVersionInfo(res.data)
            break
          case 0x280: // 640 - 状态信息（称重）
            this.handleWeightInfo(res.data)
            break
          case 0x281: // 641 - ID信息
            this.handleIdInfo(res.data)
            break
          default:
            console.log('未知的canId:', res.id)
        }
      })
    },
    /// 清除监听
    removeListener() {
      usbSDK.client.events.removeAllListeners('meituan-data')
    },
    // 处理版本信息
    handleVersionInfo(data) {
      this.readInfo.bootNo = data.bootVersion || ''
      this.readInfo.hardVersion = data.hardwareVersion || ''
      this.readInfo.softVersion = data.softwareVersion || ''
      this.readInfo.materialNo = data.materialInfo || ''
    },

    // 处理称重状态信息
    handleWeightInfo(data) {
      this.readInfo.actualValue = data.weight || ''
      this.actualWeight = data.finalWeight || ''

      // 可以根据需要处理状态和故障码
      if (data.faultCode && data.faultCode !== 0) {
        console.warn('称重传感器故障码:', data.faultCode)
      }
    },

    // 处理ID信息
    handleIdInfo(data) {
      this.readInfo.idNo = data.id || ''
    }
  },
  beforeDestroy() {},
  i18n: {
    messages: {
      fr: FR.Components.Tool.WeighingSensor,
      en: EN.Components.Tool.WeighingSensor,
      zh: ZH.Components.Tool.WeighingSensor,
      de: DE.Components.Tool.WeighingSensor,
      nl: NL.Components.Tool.WeighingSensor
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.weighing {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 44px 0;
  .btn-back {
    margin-left: 40px;
    top: -26px;
    position: relative;
  }
  .weighing-content {
    width: 950px;
    margin: 0 auto;
    .connect-tip {
      display: flex;
      float: right;
      align-items: center;
      a {
        display: flex;
        color: #e26829;
      }
      .tip-img {
        top: 0;
        right: 20px;
        margin-left: 5px;
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      margin-left: 33px;
      font-size: 16px;
      /*display: flex;*/
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        margin-right: 16px;
      }
    }
    .info {
      overflow: hidden;
      background: #353945;
      width: 950px;
      /*min-height: 380px;*/
      margin-top: 22px;
      -moz-box-shadow: 0 1px 0 #2b2f3b;
      /* 老的 Firefox */
      box-shadow: 0 1px 0 #2b2f3b;
      .btn-row {
        height: 30px;
        width: 100%;
        position: relative;
        line-height: 30px;
      }

      .border-bottom {
        border-bottom: 1px solid #2b2f3b;
      }
      .info-left {
        float: left;
        margin-top: 9px;
        width: 474px;
        border-right: 1px dotted #2b2f3b;
        .item {
          margin-left: 33px;
          height: 50px;
          line-height: 50px;
          .label {
            width: 110px;
            display: inline-block;
            line-height: 20px;
            vertical-align: middle;
            word-wrap: break-word;
          }
          .input {
            width: 295px;
            // margin-left: 10px;
            & > input {
              height: 29px;
            }
          }
          .input-sn:after {
            top: 8px;
          }
          .el-select {
            width: 290px;
          }
        }
        .btn-group {
          position: absolute;
          right: 40px;
        }
        /*.sn {*/
        /*height: 60px;*/
        /*margin-left: 33px;*/
        /*line-height: 60px;*/
        /*width: 410px;*/
        /*.label {*/
        /*width: 90px;*/
        /*display: inline-block;*/
        /*}*/
        /*.sn-input {*/
        /*width: 150px;*/
        /*margin-left: 10px;*/
        /*}*/
        /*.btn-read {*/
        /*width: 70px;*/
        /*margin-left: 7px;*/
        /*}*/
        /*.btn-write {*/
        /*margin-left: 1px;*/
        /*height: 29px;*/
        /*width: 70px;*/
        /*}*/
        /*}*/
      }
      .info-right {
        float: left;
        margin-top: 9px;
        width: 474px;
        .item {
          margin-left: 33px;
          height: 50px;
          line-height: 50px;
          display: flex;
          align-items: center;
          .el-select {
            width: 187px;
          }
          .tip {
            display: inline-block;
            border-radius: 50%;
            width: 10px;
            height: 10px;
            background: #e26829;
            margin: 0 6px;
          }
          .connect {
            background: #76ee00;
          }
          .label {
            width: 110px;
            display: inline-block;
            line-height: 20px;
            vertical-align: middle;
            word-wrap: break-word;
          }
          .input {
            width: 295px;
          }

          > button {
            margin-right: 12px;
          }
        }
        .btn-group {
          position: absolute;
          right: 26px;
        }
        .btns {
          display: inline-block;
        }
        .loading {
          display: inline-block;
          vertical-align: middle;
        }
      }
      .note-title {
        margin-top: 10px;
      }
    }
    /*.data {*/
    /*height: 100%;*/
    /*margin-top: 1px;*/
    /*}*/
    .record {
      height: 80px;
      line-height: 20px;
      .wrap {
        .title-record {
          font-size: 16px;
        }
        padding: 20px 33px;
        .number {
          color: #e26829;
        }
      }
    }
    .tip-dialog {
      font-size: 18px;
      line-height: 28px;
      .el-dialog__body {
        padding: 0;
        .txt {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>



// WEBPACK FOOTER //
// weighingSensor.vue?806bf610