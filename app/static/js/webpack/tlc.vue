<!--
 * @Author: Bai YanShuo
 * @Date: 2025-06-20 15:30:36
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2025-06-20 16:32:52
 * @FilePath: /BESST/besst-client/src/components/tool/tlc.vue
 * @Description: 
-->
<template>
  <div class="hmi">
    <div class="hmi-content">
      <div class="title">
        <div style="display: flex; align-items: center"><img class="icon" src="../../assets/images/icon/icon-hmi.png" />{{ $t('tlc') }}</div>
        <div class="connect-tip">
          <el-button type="primary" @click.stop="onClickPrint">Preview</el-button>
          <a href="javascript:;" @click="dialogTipVisible = true" class="btn-tip btn-underline">
            <img src="../../assets/images/icon/icon-help.png" class="tip-img" />
          </a>
        </div>
      </div>
      <!--基本数据-->
      <div class="info option">
        <div class="note-title">
          <label class="title">{{ $t('cNam.mainData') }}</label>
        </div>
        <div class="info-left">
          <div class="item">
            <label class="label">SN</label>
            <el-input type="textarea" class="input" :rows="1" resize="none" v-model="sn"></el-input>
          </div>
          <div class="btn-row">
            <div class="btn-group">
              <el-button type="primary" @click="writeSn">{{ $t('cNam.write') }} </el-button>
            </div>
          </div>
          <div class="item">
            <label class="label">{{ $t('cNam.model') }}</label>
            <el-input class="input" v-model="readInfo.modelNumber" disabled></el-input>
          </div>
          <div class="item">
            <label class="label">{{ $t('cNam.hardwareVersion') }}</label>
            <el-input class="input" v-model="readInfo.hardVersion" disabled></el-input>
          </div>
          <div class="item">
            <label class="label">{{ $t('cNam.clientCode') }}</label>
            <el-input class="input" v-model="readInfo.clientCode" disabled></el-input>
          </div>
        </div>
        <div class="info-right">
          <div class="item">
            <label class="label">USB HID</label>
            <label class="tip" :class="{ connect: isConnected }"></label>
            <el-button @click="connect" type="primary" :disabled="loading || isReset">{{ $t('cNam.connect') }}</el-button>
          </div>
          <div class="btn-row">
            <div class="btn-group">
              <vue-loading class="loading" type="spin" color="#E26829" v-if="loading"></vue-loading>
              <div class="btns">
                <el-button type="preview" @click="read" :disabled="loading || isReset || !isConnected">{{ $t('cNam.read') }}</el-button>
                <el-button type="primary" @click="reset" :disabled="loading || isReset || !isConnected">{{ $t('cNam.reset') }}</el-button>
              </div>
            </div>
          </div>

          <div class="item">
            <label class="label">{{ $t('cNam.softwareVersion') }}</label>
            <el-input class="input" v-model="readInfo.softVersion" disabled></el-input>
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
        <div class="txt">
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
        <div class="txt">{{ $t('cNam.txtNote2') }}</div>
      </div>
      <div class="clear-20"></div>
      <div class="">
        <h1>{{ $t('cNam.pcMode') }} - UART</h1>
        <div class="txt">
          {{ $t('cNam.pcModeTxt') }}
        </div>
        <div class="txt">
          {{ $t('cNam.pcModeTxtLCD') }}
        </div>
        <div class="txt">
          {{ $t('cNam.pcModeTxtLED') }}
        </div>
      </div>
    </el-dialog>

    <PrintPreview ref="printPreview" />
  </div>
</template>

<script>
import usbSDK from 'besst-usb-sdk'
import Core from 'core/core'
import ZH from 'src/assets/lang/zh'
import EN from 'src/assets/lang/en'
import DE from 'src/assets/lang/de'
import NL from 'src/assets/lang/nl'
import FR from 'src/assets/lang/fr'
import vueLoading from 'vue-loading-template'
import PrintPreview from './printPreview'
export default {
  name: 'ToolTlc',
  components: {
    vueLoading,
    PrintPreview
  },
  computed: {
    isConnected() {
      return usbSDK.client.isConnected()
    }
  },
  data() {
    return {
      // TLC
      target: 0x16,
      // 盒子
      source: 0x05,
      // 物料设置
      sn: '',
      readInfo: {
        sn: '',
        hardVersion: '',
        softVersion: '',
        modelNumber: '',
        clientCode: ''
      },
      loading: false,
      isWrite: false,
      isReset: false,
      isRead: false,
      dialogTipVisible: false
    }
  },
  mounted() {},
  methods: {
    connect() {
      usbSDK.client.connect()
    },
    async writeSn() {
      try {
        if (!this.sn) {
          this.$message({
            message: 'Please in put SN. 请输入SN',
            type: 'warning',
            duration: 2000,
            showClose: true
          })
          return
        }
        let writeSn = this.sn.replace(/\s/g, '')

        this.isWrite = true
        var res = await usbSDK.machineInformation.update.serialNumber(this.source, this.target, Core.Util.stringToHex(writeSn))
        if (res.can === 'NORMAL_ACK') {
          this.$message({
            message: this.$t('cNam.writeSuccess') + this.$t('cNam.sn'),
            type: 'success',
            duration: 2000,
            showClose: true
          })
          this.sn = ''
          if (res.dataParsed) this.sn = res.dataParsed

          // 写入客户号
          await this.writeCustomerNum()
        } else {
          this.$message({
            message: this.$t('cNam.writeFail') + this.$t('cNam.sn'),
            type: 'error',
            duration: 2000,
            showClose: true
          })
        }
        this.isWrite = false
      } catch (error) {
        this.isWrite = false
        console.log(error)
      }
    },
    async read() {
      try {
        this.isRead = true
        this.clearParams()
        await this.readBase()
        this.isRead = false
      } catch (error) {
        this.isRead = false
        console.log(error)
      }
    },
    async writeCustomerNum() {
      try {
        let clientCodeText = this.readInfo.clientCode.replace(/\s/g, '')
        if (clientCodeText == '') return
        var res = await usbSDK.machineInformation.update.customerNumber(this.source, this.target, Core.Util.stringToHex(clientCodeText))

        if (res.can === 'NORMAL_ACK') {
          this.$message({
            message: this.$t('cNam.writeSuccess') + this.$t('cNam.clientCode'),
            type: 'success',
            duration: 2000,
            showClose: true
          })
        } else {
          this.$message({
            message: this.$t('cNam.writeFail') + this.$t('cNam.clientCode'),
            type: 'error',
            duration: 2000,
            showClose: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 读取数据
    async readBase() {
      // sn
      var snRes = await usbSDK.machineInformation.get.serialNumber(this.source, this.target)
      this.sn = snRes.dataParsed
      this.readInfo.sn = snRes.dataParsed

      // 硬件版本号
      var hvRes = await usbSDK.machineInformation.get.hardwareVersionNumber(this.source, this.target)
      this.readInfo.hardVersion = hvRes.dataParsed
      // 软件版本号
      var svRes = await usbSDK.machineInformation.get.softwareVersionNumber(this.source, this.target)
      this.readInfo.softVersion = svRes.dataParsed

      // 型号
      var modelRes = await usbSDK.machineInformation.get.modelNumber(this.source, this.target)
      this.readInfo.modelNumber = modelRes.dataParsed

      // 客户号
      var customerNumber = await usbSDK.machineInformation.get.customerNumber(this.source, this.target)
      this.readInfo.clientCode = customerNumber.dataParsed
    },
    async reset() {
      try {
        this.isReset = true
        this.clearParams()
        this.clear()
        await usbSDK.client.reset()
        this.$message({
          message: this.$t('cNam.resetTip'),
          type: 'info'
        })
        this.isReset = false
      } catch (error) {
        this.isReset = false
        console.log(error)
      }
    },
    clear() {
      this.isWrite = false
      this.isRead = false
      this.loading = false
    },
    clearParams() {
      this.sn = ''
      this.readInfo = {
        sn: '',
        hardVersion: '',
        softVersion: '',
        modelNumber: '',
        clientCode: ''
      }
    },
    onClickPrint() {
      const data = [
        {
          title: this.$t('cNam.mainData'),
          items: [
            {
              label: 'SN',
              value: this.sn
            },
            {
              label: this.$t('cNam.model'),
              value: this.readInfo.modelNumber
            },
            {
              label: this.$t('cNam.softwareVersion'),
              value: this.readInfo.softVersion
            },
            {
              label: this.$t('cNam.hardwareVersion'),
              value: this.readInfo.hardVersion
            }
          ]
        }
      ]

      console.log(data)
      this.$refs['printPreview'].show(data)
    }
  },
  beforeDestroy() {
    // 组件销毁前清除定时器
    clearTimeout(this.inputTimer)
  },
  i18n: {
    messages: {
      fr: FR.Components.Tool.Tlc,
      en: EN.Components.Tool.Tlc,
      zh: ZH.Components.Tool.Tlc,
      de: DE.Components.Tool.Tlc,
      nl: NL.Components.Tool.Tlc
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.hmi {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 44px 0;
  .btn-back {
    margin-left: 40px;
    top: -26px;
    position: relative;
  }
  .hmi-content {
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
// tlc.vue?4040cfe1