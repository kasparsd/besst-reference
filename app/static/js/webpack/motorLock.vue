<!--
 * @Author: Bai YanShuo
 * @Date: 2024-09-25 12:56:51
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2025-01-16 16:11:10
 * @FilePath: /BESST/besst-client/src/components/tool/motorLock.vue
 * @Description: 
-->
<template>
  <div class="motor-lock">
    <div class="motorLock-content">
      <label class="title">
        <div style="display: flex; align-items: center"><img class="icon" src="../../assets/images/icon/icon-elock.png" />{{ $t('elock') }}</div>
        <div class="connect-tip">
          <a href="javascript:;" @click="dialogTipVisible = true" class="btn-tip btn-underline">
            <img src="../../assets/images/icon/icon-help.png" class="tip-img" />
          </a>
        </div>
      </label>
      <div class="info">
        <div class="note-title">
          <label class="title">{{ $t('cNam.mainData') }}</label>
        </div>
        <div class="info-left">
          <div class="item" v-if="org.type === Core.Const.ORG_TYPE.COMPONENT">
            <label class="label">SN</label>
            <el-input type="textarea" class="input input-sn" :rows="1" resize="none" v-model="sn"></el-input>
          </div>
          <div class="item" v-else>
            <label class="label">SN</label>
            <el-input type="textarea" class="input" :rows="1" resize="none" v-model="sn"></el-input>
          </div>
          <div class="btn-row">
            <div class="btn-group">
              <el-button type="primary" class="btn-write" @click="writeSn" :disabled="loading" v-if="org.type === Core.Const.ORG_TYPE.COMPONENT"
                >{{ $t('cNam.write') }}
              </el-button>
            </div>
          </div>
          <div class="item">
            <label class="label">{{ $t('cNam.model') }}</label>
            <el-input class="input" v-model="model" disabled></el-input>
          </div>
          <div class="item">
            <label class="label">{{ $t('cNam.hardwareVersion') }}</label>
            <el-input class="input" v-model="hardVersion" disabled></el-input>
          </div>
        </div>
        <div class="info-right">
          <div class="item">
            <label class="label">USB HID</label>
            <label class="tip" :class="{ connect: isConnected }"></label>
            <el-button @click="connect" type="primary" :disabled="!usbHID || loading || isReset">{{ $t('cNam.connect') }}</el-button>
          </div>
          <div class="btn-row">
            <div class="btn-group">
              <vue-loading class="loading" type="spin" color="#E26829" v-if="loading"></vue-loading>
              <div class="btns">
                <el-button type="preview" @click="readBase" :disabled="loading || isReset || !isConnected">{{ $t('cNam.read') }}</el-button>
                <el-button type="primary" @click="reset" :disabled="loading || isReset || !isConnected">{{ $t('cNam.reset') }}</el-button>
              </div>
            </div>
          </div>
          <div class="item">
            <label class="label">{{ $t('cNam.softwareVersion') }}</label>
            <el-input class="input" v-model="version" disabled></el-input>
          </div>
        </div>
      </div>
    </div>

    <!--说明弹框-->
    <el-dialog :title="$t('cNam.operationTip')" custom-class="tip-dialog" :visible.sync="dialogTipVisible">
      <div>
        <h1>{{ $t('cNam.txtTitle1') }}</h1>
        <div class="txt">
          <span class="itemName">COM</span> <span>{{ $t('cNam.txtTitleCom') }}</span>
        </div>
        <div class="txt">
          <span class="itemName">USB HID</span> <span>{{ $t('cNam.txtTitleHid') }}</span>
        </div>
        <div class="txt">
          <span class="itemName">{{ $t('cNam.connect') }}</span>
          <span>{{ $t('cNam.txtTitleCon') }}</span>
        </div>
        <div class="txt">
          <span class="itemName">{{ $t('cNam.read') }}</span>
          <span>{{ $t('cNam.txtTitleRead') }}</span>
        </div>
        <div class="txt" v-if="org.type === Core.Const.ORG_TYPE.COMPONENT">
          <span class="itemName">{{ $t('cNam.write') }}</span>
          <span>{{ $t('cNam.txtTitleWrt') }}</span>
        </div>
        <div class="txt">
          <span class="itemName">{{ $t('cNam.reset') }}</span>
          <span>{{ $t('cNam.txtTitleReset') }}</span>
        </div>
        <div class="clear-20"></div>
        <h1>{{ $t('cNam.txtTitle2') }}</h1>
        <div class="txt">{{ $t('cNam.txtNote1') }}</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Sensor from '../../../device/sensor'
import Port from '../../../device/conn'
import ZH from 'src/assets/lang/zh'
import EN from 'src/assets/lang/en'
import DE from 'src/assets/lang/de'
import NL from 'src/assets/lang/nl'
import FR from 'src/assets/lang/fr'
import Core from 'core/core'
import usbSDK from 'besst-usb-sdk'

import vueLoading from 'vue-loading-template'
export default {
  name: 'motorLock',
  components: {
    vueLoading
  },
  data() {
    return {
      isConnected: Port.isConnected(),
      com: '',
      comList: [],
      org: Core.Data.getOrg(),
      Core: Core,
      dialogTipVisible: false,
      sn: '',
      model: '',
      version: '',
      hardVersion: '',

      isScanner: false,
      lastInputTime: 0,
      scannerTimeout: '',
      loading: false,
      isReset: false,
      isCan: false,
      usbHID: false,

      reconnectInterval: null,
      connectionIntervalSen: null,
      readSn: '' // 读取到的sn
    }
  },
  i18n: {
    messages: {
      fr: FR.Components.Tool.MotorLock,
      en: EN.Components.Tool.MotorLock,
      zh: ZH.Components.Tool.MotorLock,
      de: DE.Components.Tool.MotorLock,
      nl: NL.Components.Tool.MotorLock
    }
  },
  mounted() {
    this.org = Core.Data.getOrg()

    Port.timeLog('Sensor')
    Port.setBoxOperation()
    this.checkConnection()
  },
  methods: {
    init() {
      Port.startConnection()
      if (Port.getUSBDevice() || this.usbHID) {
        this.usbHID = true
        console.log(' get USB Device Sensor')
        if (this.isReset) {
          this.connect()
        } else {
          this.connect(1)
        }
      }
      this.isConnected = Port.isConnected()
    },
    writeSn() {
      if (!this.sn) {
        this.$message({
          message: this.$t('cNam.snEmptyTip'),
          type: 'warning'
        })
        return
      }
      this.sn = this.sn.replace(/\s/g, '')

      Port.usbSDK.machineInformation.update
        .serialNumber(0x05, 0x07, Port.Core.Util.stringToHex(this.sn))
        .then((res) => {
          //                        console.log(res);
          if (res.can === 'NORMAL_ACK') {
            this.sn = ''
            this.$message({
              message: this.$t('cNam.writeSuccess'),
              type: 'success'
            })
            Port.usbSDK.machineInformation.get
              .serialNumber(0x05, 0x07)
              .then((res) => {
                this.sn = res.dataParsed
                this.readSn = this.sn
              })
              .catch((err) => {
                console.log(err)
                this.usbErrorCheck(err)
              })
              .finally(() => {})
          } else {
            this.$message({
              message: this.$t('cNam.writeFail'),
              type: 'error'
            })
          }
        })
        .catch((err) => {
          console.log(err)
          this.usbErrorCheck(err)
        })
        .finally(() => {
          this.writeStatus = false
        })
    },
    usbErrorCheck(err) {
      Port.checkUsbError(err)
    },
    checkConnection() {
      let vm = this
      if (vm.connectionIntervalSen) {
        clearInterval(vm.connectionIntervalSen)
        vm.connectionIntervalSen = ''
      }
      vm.connectionIntervalSen = setInterval(() => {
        let connection = Port.getConnection()
        if (connection.usb) {
          //                        this.checkUSBUartOrCan();
          vm.usbHID = true
        }
        if (connection.com) {
          vm.usbHID = false
        }
        if (connection.usb || connection.com) {
          vm.init()
          clearInterval(vm.connectionIntervalSen)
        }
      }, 300)
    },
    connect(type) {
      if (!this.usbHID) {
        this.$message({
          message: this.$t('cNam.noCanConnect'),
          type: 'warning'
        })
        return
      }
      if (this.usbHID) {
        if (type === 1) {
          this.test()
        } else {
          setTimeout(() => {
            this.test()
          }, 1000)
        }
        this.isConnected = true
        console.log('usbHID connect')
        Port.getListenData().subscribe((res) => {
          if (!res.data) {
            return
          }
          if (res.type == 'error_usb') {
            this.isConnected = false
            this.clear()
          }
        })
      }
    },
    readBase() {
      if (!this.isConnected) {
        this.$message({
          message: this.$t('cNam.comDisconnect'),
          type: 'warning'
        })
        return
      }
      this.clear()
      this.loading = true
      this.isRead = true
      this.connect(1)
      setTimeout(() => {
        if (this.loading) {
          if (!this.checkData()) {
            this.$message({
              message: this.$t('cNam.sensorTip'),
              type: 'warning'
            })
          }
        }
        this.loading = false
      }, 1200)

      Port.getUsbBasic(0x07).subscribe((res) => {
        if (!res.data) {
          return
        }
        if (res.data.hasOwnProperty('sn')) {
          this.sn = res.data.sn
        }
        if (res.data.hasOwnProperty('model')) {
          this.model = res.data.model
        }
        if (res.data.hasOwnProperty('version')) {
          this.version = res.data.version
        }
        if (res.data.hasOwnProperty('hardware_version')) {
          this.hardVersion = res.data.hardware_version
        }
      })

      // setTimeout(() => {
      //   this.isRead = false
      // }, 1400)
    },
    test() {
      Port.checkUsbConnection('0101', 1)
    },
    clear() {
      this.sn = ''
      this.model = ''
      this.version = ''
      this.hardVersion = ''
    },
    reset() {
      this.isReset = true
      setTimeout(() => {
        this.isReset = false
      }, 1000)
      this.clear()
      Port.reset(100)
      console.log('reset HID')
      this.isConnected = false
    },
    //判断是否一个数据都没有
    checkData() {
      if (this.sn || this.model || this.version || this.hardVersion) {
        return true
      } else {
        return false
      }
    }
  },
  beforeDestroy: function () {
    Port.setBoxOperation()
  },
  watch: {
    sn: function (newValue, oldValue) {
      let vm = this
      if (newValue === oldValue || newValue === '') {
        return
      }
      if (typeof oldValue !== 'undefined') {
        let time = new Date().getTime()
        vm.isScanner = time - vm.lastInputTime <= 100 // 间隔小于100ms的就认为是扫描枪输入
        vm.lastInputTime = time
      } else {
        vm.lastInputTime = new Date().getTime()
      }
      if (!vm.scannerTimeout) {
        vm.scannerTimeout = setTimeout(function () {
          if (vm.isScanner) {
            vm.sn = vm.sn.replace(/\s+/g, '')
          }
          clearTimeout(vm.scannerTimeout)
          vm.scannerTimeout = undefined
        }, 1000)
      }
    },
    isConnected: function (newValue, oldValue) {
      let vm = this
      if (newValue != oldValue && oldValue == true) {
        let count = 0
        Port.setConnection()
        Port.setBoxOperation()
        if (false) {
        } else {
          if (vm.reconnectInterval) {
            clearInterval(vm.reconnectInterval)
            vm.reconnectInterval = ''
          }
          vm.reconnectInterval = setInterval(() => {
            count++
            console.log('Count', count)
            if (count === 1) {
              vm.checkConnection()
            } else if (count > 1) {
              if (vm.usbHID) {
                clearInterval(vm.reconnectInterval)
                vm.init()
              }
              if (count > 3 && Port.isConnected()) {
                console.log('Count stop', count)
                clearInterval(vm.reconnectInterval)
              }
            }
          }, 500)
        }
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.motor-lock {
  padding: 44px 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  .btn-back {
    margin-left: 40px;
    top: -26px;
    position: relative;
  }
  .motorLock-content {
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
      .can {
        display: inline-block;
        width: 58px;
        position: relative;
        font-size: 14px;
        line-height: 22px;
        height: 22px;
        padding-left: 15px;
        margin-left: 10px;
        vertical-align: middle;
        border-color: rgb(34, 37, 46);
        background-color: rgb(34, 37, 46);
        outline: none;
        border-radius: 12px;
        box-sizing: border-box;
        cursor: pointer;
        transition: border-color 0.3s, background-color 0.3s;
      }
    }
    .info {
      overflow: hidden;
      background: #353945;
      width: 950px;
      /*min-height: 120px;*/
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
          .el-select {
            width: 290px;
          }
          .input-sn:after {
            top: 8px;
          }
        }
        .btn-group {
          position: absolute;
          right: 40px;
        }
        .sn {
          height: 60px;
          margin-left: 33px;
          line-height: 60px;
          width: 410px;
          .label {
            width: 90px;
            display: inline-block;
          }
          .sn-input {
            width: 150px;
            margin-left: 10px;
          }
          .btn-read {
            width: 70px;
            margin-left: 7px;
          }
          .btn-write {
            margin-left: 1px;
            height: 29px;
            width: 70px;
          }
        }
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
  }
}
</style>



// WEBPACK FOOTER //
// motorLock.vue?24257f84