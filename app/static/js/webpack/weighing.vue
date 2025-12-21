<!--
 * @Author: Bai YanShuo
 * @Date: 2025-09-22 11:49:40
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2025-11-24 10:54:28
 * @FilePath: /BESST/besst-client/src/views/component/order/test-report/weighing.vue
 * @Description: 
-->
<template>
  <div class="component-order-test-report">
    <div class="header">
      <div class="btn-group-inline">
        <div class="icons">
          <div class="icon-item back" @click="$router.back()" :title="$t('back')"></div>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content">
        <!-- 订单、物料信息 -->
        <div class="content-card-item">
          <label class="content-header">Setting</label>
          <div class="content-body">
            <div class="item">
              <label class="label">Model</label>
              <span>{{ itemInfo.name }}</span>
            </div>
            <div class="item">
              <label class="label">Customer Name</label>
              <span>{{ orderInfo.customer_id || '/' }}</span>
            </div>
            <div class="item">
              <label class="label">Order No.</label>
              <span>{{ orderInfo.source_id || '/' }}</span>
            </div>
            <div class="item">
              <label class="label">Article No.</label>
              <span>{{ itemInfo.ext_part_no || '/' }}</span>
            </div>
            <!-- 渲染动态物料字段 -->
            <div class="item" v-for="(item, index) in needAttrList" :key="index">
              <label class="label">{{ item.attr_def_name }}</label>
              <span>{{ item.value }}</span>
            </div>
            <!-- 已生产/总数 -->
            <div class="item">
              <label class="label">Produced/Amount</label>
              <span>{{ itemOrderInfo ? itemOrderInfo.produced : 0 }}/{{ itemOrderInfo ? itemOrderInfo.amount : 0 }}</span>
            </div>
          </div>
        </div>
        <!-- Test Report -->
        <div class="content-card-item">
          <label class="content-header">Test Report</label>
          <div class="content-body">
            <div class="hardware-item">
              <div class="select-holder">
                <label class="label">USB HID</label>
                <label class="tip" :class="{ connect: isConnected }"></label>
              </div>
              <div class="operation-holder">
                <el-button type="danger" @click="reset">Reset</el-button>
                <!-- <el-button type="danger" @click="saveComponent">Save</el-button> -->
              </div>
            </div>
            <div class="hardware-item">
              <div class="input-holder">
                <label class="label">SN</label>
                <!-- <el-input ref="sn_input" type="input" @input="handleSnInput" class="input input-sn" :rows="1" resize="none" v-model="sn"></el-input> -->
                <textarea rows="1" ref="sn_input" class="input el-input__inner sn-input" @keyup="handleSnInput" v-model="sn" />
              </div>
            </div>
            <!-- 数据 -->

            <div class="hardware-item">
              <div class="select-holder">
                <label class="label">{{ $t('cNam.sn') }}</label>
                <el-input class="input" v-model="readInfo.idNo" disabled></el-input>
              </div>
            </div>
            <div class="hardware-item">
              <div class="select-holder">
                <label class="label">标定值</label>
                <el-input class="input" type="number" v-model="calibrationValue"></el-input>
              </div>
              <div class="operation-holder">
                <label class="label">误差值</label>
                <el-input class="input" type="number" v-model="errorValue"></el-input>
                <el-button type="primary" @click="setCalibrationValue">设置</el-button>
              </div>
            </div>
            <div class="hardware-item">
              <div class="select-holder">
                <label class="label">{{ $t('cNam.softwareVersion') }}</label>
                <el-input class="input" v-model="readInfo.softVersion" disabled></el-input>
              </div>
              <div class="operation-holder">
                <label class="label">{{ $t('cNam.hardwareVersion') }}</label>
                <el-input class="input" v-model="readInfo.hardVersion" disabled></el-input>
              </div>
            </div>
            <div class="hardware-item">
              <div class="select-holder">
                <label class="label">BOOT号</label>
                <el-input class="input" v-model="readInfo.bootNo" disabled></el-input>
              </div>
              <div class="operation-holder">
                <label class="label">材料号</label>
                <el-input class="input" v-model="readInfo.materialNo" disabled></el-input>
              </div>
            </div>
            <div class="hardware-item">
              <div class="select-holder">
                <label class="label">称重</label>
                <el-input class="input" v-model="readInfo.actualWeight" disabled></el-input>
              </div>
              <div class="operation-holder">
                <label class="label">传感器实际值</label>
                <el-input class="input" v-model="readInfo.actualValue" disabled></el-input>
              </div>
            </div>
            <!-- 新增：显示缓存的重量数据 -->
            <div class="hardware-item">
              <div class="select-holder">
                <label class="label">测量重量</label>
                <el-input class="input" v-model="cachedWeight" disabled></el-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--提示弹窗-->
    <el-dialog title="Tip" :visible.sync="dialogTipVisible" size="tiny">
      <p>请检查 {{ tip }}</p>
      <div slot="footer" class="dialog-footer">
        <el-button type="preview" @click="saveComponent">{{ $t('cNam.save') }}</el-button>
        <el-button type="primary" @click="clear()">{{ $t('cNam.cancel') }}</el-button>
      </div>
    </el-dialog>

    <!-- 加载 -->
    <div class="loading" v-if="loading">
      <img src="../../../../assets/images/icon/loading-bars.svg" alt="Loading icon" />
    </div>
  </div>
</template>

<script>
import Core from 'core/core'
import ZH from 'src/assets/lang/zh'
import EN from 'src/assets/lang/en'
import DE from 'src/assets/lang/de'
import NL from 'src/assets/lang/nl'
import FR from 'src/assets/lang/fr'
import usbSDK from 'besst-usb-sdk'

export default {
  name: 'test-report-weighing',
  computed: {
    isConnected() {
      return usbSDK.client.isConnected()
    }
  },
  data() {
    return {
      orderId: '',
      itemOrderInfo: {},
      itemInfo: {},
      orderInfo: {},
      needAttrList: [],
      attrValues: {},
      readInfo: {
        /// 传感器实际值
        actualValue: '',
        idNo: '',
        hardVersion: '',
        softVersion: '',
        bootNo: '',
        /// 材料号
        materialNo: '',
        actualWeight: ''
      },
      sn: '',
      loading: false,
      isSaving: false,

      // 新增：缓存稳定的称重值
      cachedWeight: '0',
      // 标定值
      calibrationValue: 10,
      // 误差值
      errorValue: 0.5,
      //提示弹窗
      dialogTipVisible: false,
      tip: ''
    }
  },
  mounted: function () {
    console.log('TLC')
    // 订单id
    this.orderId = this.$route.query.orderId
    // 物料订单信息
    this.itemOrderInfo = this.$route.query.item

    this.readCalibrationValue()

    // 设置焦点
    this.focusInput('sn_input')

    // 获取订单详情
    this.getProductionOrderDetail()
    // 获取物料详情
    this.getItemDetail()

    this.listen()
  },
  beforeDestroy: function () {
    this.removeListener()
  },
  methods: {
    focusInput(event) {
      this.$nextTick(() => {
        this.$refs[event].focus()
      })
    },
    handleSnInput() {
      this.checkScannerInput()
    },
    checkScannerInput() {
      const now = Date.now()
      const timeDiff = now - this.lastInputTime

      // 判断是否为扫码枪输入（快速连续输入且间隔很短）
      if (timeDiff < 35 && this.sn.length > 0) {
        // 扫码枪输入处理逻辑
        console.log('扫码枪输入:', this.sn)
        clearTimeout(this.inputTimer)
        // 设置新的定时器
        this.inputTimer = setTimeout(async () => {
          await this.processScannerInput()
        }, 800) // 00ms防抖延迟
      }

      this.lastInputTime = now
    },
    async processScannerInput() {
      try {
        let sn = this.sn.replace(/\s+/g, '')
        if (sn !== this.readInfo.idNo) {
          this.sn = ''
          clearTimeout(this.inputTimer)
          this.$confirm('读取的SN与输入的SN不一致', '提示', {
            showConfirmButton: false,
            closeOnClickModal: false,
            cancelButtonText: '关闭',
            type: 'warning'
          })
          return
        }
      } catch (error) {
        console.log('processScannerInput error:', error)
      }
    },
    async reset() {},
    setCalibrationValue() {
      usbSDK.meituan.setStandardWeight(this.calibrationValue, this.errorValue)
      // 设置到本地数据localStorage
      localStorage.setItem('calibrationValue', this.calibrationValue)
      localStorage.setItem('errorValue', this.errorValue)
      this.$message.success('标定值和误差值设置成功')
    },
    // 读取本地标定数据
    readCalibrationValue() {
      this.calibrationValue = localStorage.getItem('calibrationValue') || 10
      this.errorValue = localStorage.getItem('errorValue') || 0.5
    },
    /// 监听称重传感器数据
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
          case 0x105: // 261 - 按键事件
            this.handleButtonPress(res.data)
          //   break
          case 0x100: // 256 - 重量数据
            this.cachedWeight = res.data.finalWeight.toString()
            console.log('缓存称重值:', this.cachedWeight)
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
      this.readInfo.actualWeight = data.finalWeight || ''

      // 可以根据需要处理状态和故障码
      if (data.faultCode && data.faultCode !== 0) {
        console.warn('称重传感器故障码:', data.faultCode)
      }
    },

    // 处理ID信息
    handleIdInfo(data) {
      this.readInfo.idNo = data.id || ''
    },

    // 新增：处理按键事件
    handleButtonPress(data) {
      console.log('按键事件:', data)
      if (data.state === true && data.sid === 3 && data.resSid === 127) {
        console.log('-键按钮触发')
        if (!data.passed) {
          // 弹出对话框提示
          this.$confirm('不在误差范围内', '提示', {
            showConfirmButton: false,
            closeOnClickModal: false,
            cancelButtonText: '关闭',
            type: 'warning'
          })
            .then(() => {
              // 用户点击了确定按钮，继续处理
              this.cachedWeight = '0'
            })
            .catch(() => {
              // 用户点击了取消按钮，不继续处理
              this.cachedWeight = '0'
            })
          return
        }
        // 检查是否为+键按下事件
        console.log('检测到+键按下，开始处理测量结束逻辑')
        this.cachedWeight = data.finalWeight.toString()

        // 使用缓存的稳定称重值作为本次提交数据
        if (this.cachedWeight && this.cachedWeight !== '0') {
          console.log('提交称重数据:', this.cachedWeight)
          this.submitWeightRecord()
        } else {
          console.warn('没有有效的称重数据可提交')
          this.$message({
            message: '没有有效的称重数据，请重新测量',
            type: 'warning'
          })
        }
      } else if (data.state === true && data.sid === 2 && data.resSid === 65) {
        console.log('+键按钮触发')
        this.$nextTick(() => {
          this.cachedWeight = '0'
        })
      }
    },
    // 新增：提交称重记录
    async submitWeightRecord() {
      if (this.checkReadInfo()) {
        this.saveComponent()
      } else {
        this.dialogTipVisible = true
      }
    },
    saveComponent() {
      try {
        if (this.isSaving) {
          return
        }
        let sn = this.sn.replace(/\s/g, '')
        if (!sn) {
          this.$confirm(this.$t('cNam.snEmptyTip'), '提示', {
            showConfirmButton: false,
            closeOnClickModal: false,
            cancelButtonText: '关闭',
            type: 'warning'
          })
          return
        }

        if (sn !== this.readInfo.idNo) {
          this.sn = ''
          clearTimeout(this.inputTimer)
          this.$confirm('读取的SN与输入的SN不一致', '提示', {
            showConfirmButton: false,
            closeOnClickModal: false,
            cancelButtonText: '关闭',
            type: 'warning'
          })
          return
        }

        this.loading = true
        // 准备提交的数据
        const recordData = {
          orderId: this.orderId,
          itemId: this.itemOrderInfo.item_id,
          sn: this.sn,
          weight: this.cachedWeight,
          sensorValue: this.readInfo.actualValue,
          deviceInfo: {
            id: this.readInfo.idNo,
            softwareVersion: this.readInfo.softVersion,
            hardwareVersion: this.readInfo.hardVersion,
            bootVersion: this.readInfo.bootNo,
            materialInfo: this.readInfo.materialNo
          },
          timestamp: new Date().toISOString()
        }

        console.log('提交称重记录:', recordData)

        this.isSaving = true
        let id = ''
        let orderId = this.orderId
        let qc = ''
        let testData = this.getReadJson()
        let productTime = Core.Util.time()
        let itemId = this.itemOrderInfo.item_id
        let customerSN = ''

        Core.Api.Component.saveComponent(id, orderId, sn, qc, testData, productTime, itemId, customerSN)
          .then((res) => {
            this.clearParams()
            this.getProductionOrderDetail()
            this.$message({
              message: this.$t('cNam.saveSuccess'),
              type: 'success',
              duration: 3000,
              showClose: true
            })
            this.dialogTipVisible = false
            // 清零显示值，准备下次测量
            this.resetForNextMeasurement()

            this.focusInput('sn_input')

            // 延迟放开保存状态，给用户反馈
            setTimeout(() => {
              this.isSaving = false
            }, 2000)
          })
          .catch((e) => {
            this.isSaving = false
            this.cachedWeight = '0'
            this.$confirm(e.message != null ? e.message : '提交称重记录失败', '提示', {
              showConfirmButton: false,
              closeOnClickModal: false,
              cancelButtonText: '关闭',
              type: 'warning'
            })
          })
      } catch (error) {
        this.isSaving = false
        this.cachedWeight = '0'
        console.error('提交称重记录失败:', error)
        this.$message({
          message: '提交称重记录失败，请重试',
          type: 'error'
        })
      } finally {
        this.loading = false
        this.cachedWeight = '0'
      }
    },

    // 新增：重置准备下次测量
    resetForNextMeasurement() {
      // 清空当前显示的称重值（因为按键后会回到悬空状态）
      this.readInfo.actualWeight = '0'
      this.readInfo.actualValue = '0'

      // 保留缓存值，但准备接收新的稳定值
      console.log('重置显示值，准备下次测量')
    },
    getReadJson() {
      let params = {}
      params['soft_ver'] = this.readInfo.softVersion.trim()
      params['hard_ver'] = this.readInfo.hardVersion.trim()
      // 标定值
      params['calibration_value'] = this.calibrationValue.trim()
      // 误差值
      params['error_value'] = this.errorValue.trim()
      // 测量重量
      params['measured_weight'] = this.cachedWeight.trim()
      if (params && params !== '') {
        return JSON.stringify(params)
      }
      return ''
    },
    async getProductionOrderDetail() {
      try {
        var res = await Core.Api.Order.getProductionOrderDetail(this.orderId)
        this.orderInfo = res.order
        console.log('orderInfo', res.order)
        // 物料订单信息
        this.itemOrderInfo = res.order.item_list.find((item) => {
          return item.item_id == this.itemOrderInfo.item_id
        })

        if (this.itemOrderInfo && this.itemOrderInfo.produced >= this.itemOrderInfo.amount) {
          this.$message({
            message: 'The item is finished，订单已完成',
            type: 'warning'
          })
          this.$router.back()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getItemDetail() {
      var res = await Core.Api.Item.getItemDetail(this.itemOrderInfo.item_id)
      this.itemInfo = res.item
      console.log(res.item)
      // 渲染动态物料字段
      this.getAttr()
    },
    // 渲染动态物料字段
    getAttr() {
      if (this.itemInfo.attr_list.length <= 0) {
        return
      }
      let needNameList = ['soft_ver', 'hard_ver', 'capacity', 'voltage']

      this.needAttrList = this.itemInfo.attr_list.filter((item) => {
        return needNameList.indexOf(item.attr_def_key) > -1
      })

      this.needAttrList.forEach((item) => {
        this.attrValues[item.attr_def_key] = item.value + ''
      })
    },
    checkReadInfo() {
      // 判断读取的数据如果为空停止录入
      this.tip = ''
      var isEmpty = Object.values(this.readInfo).every((value) => value !== null && value !== undefined && value !== '')
      if (!isEmpty) {
        this.tip = '数据缺失'
        return false
      }

      if (this.readInfo.softVersion.replace(/\s/g, '') != this.attrValues['soft_ver'].replace(/\s/g, '')) {
        this.tip = this.tip + ', Software Version'
      }
      if (this.readInfo.hardVersion.replace(/\s/g, '') != this.attrValues['hard_ver'].replace(/\s/g, '')) {
        this.tip = this.tip + ', Hardware Version'
      }
      if (this.tip !== '') {
        return false
      }
      return true
    },
    clearParams() {
      this.sn = ''
      this.cachedWeight = '0'
    },
    clear() {
      this.loading = false
      this.dialogTipVisible = false
      this.isSaving = false
    }
  },
  i18n: {
    messages: {
      fr: FR.Component.Order.TestReport,
      en: EN.Component.Order.TestReport,
      zh: ZH.Component.Order.TestReport,
      de: DE.Component.Order.TestReport,
      nl: NL.Component.Order.TestReport
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.component-order-test-report {
  width: 100%;
  height: 100%;

  .content-wrap {
    padding: 0;
  }

  .content-card-item {
    .save-btn {
      float: right;
      margin-top: 10px;
    }

    .content-header {
      padding: 5px 43px;
      font-size: 14px;
      height: 40px;
      line-height: 30px;
      font-weight: bold;
      box-sizing: border-box;
    }
    .content-body {
      font-size: 0;
      background: #353945;
      overflow: hidden;
      padding: 20px 0;
      .item {
        width: 49%;
        display: inline-block;
        padding-left: 60px;
        line-height: 40px;

        label {
          display: inline-block;
          width: 142px;
          font-size: 14px;
          color: #a1a5b1;
        }

        span {
          margin-left: 8px;
          font-size: 14px;
        }
      }
      .hardware-item {
        padding: 0 60px;
        line-height: 40px;
        overflow: hidden;

        .select-holder {
          width: 50%;
          float: left;
          overflow: hidden;

          & > label {
            display: inline-block;
            width: 120px;
          }

          .el-select {
            width: calc(100% - 150px);
          }

          .tip {
            display: inline-block;
            border-radius: 50%;
            width: 10px;
            height: 10px;
            background: #e26829;
            margin-left: 6px;
          }

          .connect {
            background: #76ee00;
          }
        }
        .input-holder {
          width: 50%;
          float: left;
          overflow: hidden;

          & > label {
            display: inline-block;
            width: 120px;
          }

          .el-input {
            float: left;
            width: calc(100% - 124px);
          }

          .fileList {
            line-height: 20px;
            margin-left: 100px;
          }

          .el-input::after {
            top: 10px;
          }
        }
        .operation-holder {
          float: right;

          .resetButton {
            background-color: red;
          }
        }
        .autoTime {
          width: 100px;
        }
      }
    }
  }

  .loading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input-sn:after {
    top: 8px;
  }

  .input {
    width: 290px;
  }

  .errorTip {
    color: #e26829;
  }
  .btn-green {
    background-color: #98b42c;

    &:hover {
      background-color: #98d22c;
    }

    &:active {
      background-color: #e26829;
    }
  }
  .loading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sn-input {
    resize: none;
    padding: 0 10px;
    line-height: 2;
    vertical-align: middle;
  }

  .input-sn:after {
    top: 8px;
  }

  .input {
    width: 290px;
  }
}
</style>



// WEBPACK FOOTER //
// weighing.vue?eb8c9ff0