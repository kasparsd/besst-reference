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
            <div class="item" v-for="(item, index) in needAttrList" :key="index">
              <label class="label">{{ item.attr_def_name }}</label>
              <span>{{ item.value }}</span>
            </div>
            <div class="item">
              <label class="label">Produced/Amount</label>
              <span>{{ itemOrderInfo ? itemOrderInfo.produced : 0 }}/{{ itemOrderInfo ? itemOrderInfo.amount : 0 }}</span>
            </div>
          </div>
        </div>
        <div class="content-card-item" v-if="[4, 6, 7, 10, 12].indexOf(itemRoot) !== -1">
          <label class="content-header">Test Report</label>
          <div class="content-body">
            <!-- 使用二维码扫描 -->
            <div class="hardware-item" v-if="isHmiOrCtl">
              <div class="select-holder">
                <label class="label">使用二维码扫描</label>
                <el-switch v-model="useScanQR" :on-text="'开启'" :off-text="'关闭'"> </el-switch>
              </div>
            </div>
            <div class="hardware-item" v-show="isHmiOrCtl && useScanQR">
              <div class="select-holder">
                <label class="label">起始SN</label>
                <el-input v-model="qrSN.start" class="input"></el-input>
              </div>
              <div class="operation-holder">
                <div class="qr" id="qrCode"></div>
                <span>当前二维码</span>
                <p>{{ qrSN.current }}</p>
              </div>
              <div class="select-holder">
                <label class="label">结束SN</label>
                <el-input v-model="qrSN.end" class="input" disabled></el-input>
              </div>
              <div class="select-holder">
                <el-button :disabled="isStart" @click="createSNStart" type="primary">开始</el-button>
                <el-button @click="createSNReset" type="primary">重置</el-button>
                <!-- <el-button @click="saveComponent" type="primary">保存写入</el-button> -->
                <el-button @click="createSNPrev" type="primary">上一个</el-button>
                <el-button @click="createSNNext" type="primary">下一个</el-button>
              </div>
            </div>
            <!--COM -->
            <div class="hardware-item">
              <div class="select-holder" v-show="itemRoot !== 6 && !usbHID">
                <label class="label">COM</label>
                <el-select v-model="com" placeholder="Please select" @change="changeCom" @click.native="getComList">
                  <el-option v-for="(com, index) in comList" :key="index" :label="com" :value="com"> </el-option>
                </el-select>
                <label class="tip" :class="{ connect: isConnected }"></label>
              </div>
              <div class="select-holder" v-show="usbHID">
                <label class="label">USB HID</label>
                <label class="tip" :class="{ connect: isConnected }"></label>
              </div>
              <div class="operation-holder" v-show="itemRoot !== 6 || isCan">
                <el-button type="primary" @click="connect">Connect</el-button>
                <el-button type="primary">Not Online</el-button>
                <el-button type="danger" @click="reset">Reset</el-button>
              </div>
            </div>
            <!--Number of SN-->
            <div class="hardware-item">
              <div class="select-holder">
                <label class="label">Number of SN</label>
                <el-select v-model="snLength" placeholder="Please select" @change="changeSnLength()">
                  <el-option v-for="item in snLengthList" :key="item" :label="item" :value="item"> </el-option>
                </el-select>
              </div>
            </div>
            <!-- 客户号 -->
            <div class="hardware-item">
              <div class="select-holder" v-if="itemRoot !== 6 || isCan">
                <label class="label">Customer No.</label>
                <el-input v-model="clientCodeText" class="input"></el-input>
              </div>
            </div>
            <div class="hardware-item" v-if="showErrorCode">
              <div class="select-holder">
                <label class="label">{{ $t('cNam.errorCode') }}</label>
                <el-input class="input" v-model="errorCode" placeholder="6007"></el-input>
              </div>
              <div class="btn-row">
                <div class="btn-group">
                  <el-button type="preview" @click="readErrorCode">{{ $t('cNam.read') }}</el-button>
                </div>
              </div>
            </div>
            <div v-show="itemRoot === 12">
              <!-- IOT -->
              <div class="hardware-item">
                <!-- IOT QR -->
                <div class="input-holder">
                  <label class="label">IOT</label>
                  <textarea rows="1" ref="iot_qr" class="input el-input__inner iot-input" @keyup="iotQRInput" v-model="iot_qr" />
                </div>
              </div>
              <!-- 型号 -->
              <div class="item">
                <label class="label">MAC</label>
                <span>{{ iot_mac }}</span>
              </div>
              <!-- IMEI -->
              <div class="item">
                <label class="label">SN</label>
                <span>{{ iot_sn }}</span>
              </div>
              <div class="hardware-item">
                <!-- IMEI -->
                <div class="input-holder">
                  <label class="label">IMEI</label>
                  <input ref="iot_imei" type="text" class="input el-input__inner" @keyup="iotIMEIInput" v-model="iot_imei" />
                </div>
              </div>
              <div class="hardware-item">
                <div class="operation-holder">
                  <el-button type="primary" @click="nextSave">下一个</el-button>
                </div>
              </div>
            </div>
            <!-- IOT END -->
            <div class="hardware-item" v-show="itemRoot !== 12">
              <!-- <div class="input-holder" @keyup.13="next" v-if="itemRoot === 6">
                <label class="label">SN</label>
                <el-input type="textarea" class="input" :rows="1" resize="none" v-model="sn"></el-input>
              </div>
              <div class="input-holder" v-else>
                <label class="label">SN</label>
                <el-input type="textarea" class="input input-sn" :rows="1" resize="none" v-model="sn"></el-input>
              </div> -->
              <div class="input-holder">
                <label class="label">SN</label>
                <el-input type="textarea" class="input input-sn" :rows="1" resize="none" v-model="sn"></el-input>
              </div>
              <div class="operation-holder">
                <el-button
                  type="primary"
                  @click="readBaseFun"
                  :disabled="isWrite || isReset || !isConnected || isRead"
                  v-show="isCan || itemRoot !== 6"
                  class="btn-green"
                >
                  {{ $t('cNam.read') }}
                </el-button>
                <el-button type="primary" @click="writeSn" :disabled="!isConnected || isReset" v-show="isCan || itemRoot !== 6" class="btn-green">
                  {{ $t('cNam.write') }}
                </el-button>
                <el-button type="primary" @click="next" v-show="itemRoot === 6 && (!isCan || isTechnicianUse)">下一个3</el-button>
                <el-button type="danger" @click="clearParams">{{ $t('cNam.clear') }}</el-button>
              </div>
              <!-- 客户SN -->
              <div class="input-holder" v-if="customer_sn">
                <label class="label">Customer SN</label>
                <el-input v-model="customer_sn" class="input"></el-input>
              </div>
              <div class="input-holder" v-if="isCustomer0049">
                <label class="label">MAC</label>
                <span>{{ macHmi }}</span>
              </div>
              <div class="operation-holder">
                <el-upload
                  class="upload desc"
                  ref="upload"
                  :action="options.url"
                  :on-success="onSuccess"
                  :multiple="singleUpload"
                  :auto-upload="true"
                  :data="options.params"
                >
                  <el-button type="primary" v-show="itemRoot === 6 && (!isCan || isTechnicianUse)">上传</el-button>
                </el-upload>
              </div>
            </div>
            <div class="hardware-item" v-show="itemRoot === 4 || itemRoot === 7 || itemRoot === 6">
              <div class="select-holder">
                <el-switch v-model="autoOperation" :on-text="'自动'" :off-text="'手动'"> </el-switch>
                <el-input v-model="autoTime" class="autoTime"></el-input>
                <el-button type="danger" @click="setAutoTime">设置读取间隔</el-button>
              </div>
              <div class="select-holder" v-show="isTechnicianAccount">
                <span>只扫描SN录入功能</span>
                <el-switch v-model="isTechnicianUse" :on-text="'开启'" :off-text="'关闭'"> </el-switch>
              </div>
              <div class="select-holder" v-show="itemRoot === 6">
                <el-switch v-model="skipCheckSensor" :on-text="'不检查'" :off-text="'检查'"> </el-switch>
              </div>
            </div>
            <div class="hardware-item" v-show="false">
              <el-button type="danger" @click="saveComponentAdmin">批量处理</el-button>
            </div>
            <!-- 传感器 -->
            <div v-show="itemRoot === 6 && isCan">
              <div class="item">
                <label class="label">{{ $t('cNam.softwareVersion') }}</label>
                <span :class="{ errorTip: errorList.indexOf('soft_ver') > -1 }">{{ version }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.hardwareVersion') }}</label>
                <span :class="{ errorTip: errorList.indexOf('hard_ver') > -1 }">{{ hardVersion }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.model') }}</label>
                <span :class="{ errorTip: errorList.indexOf('model') > -1 }">{{ model }}</span>
              </div>
            </div>
            <!-- 仪表 -->
            <div v-show="itemRoot === 4 && isTechnicianUse">
              <div class="item">
                <label class="label">{{ $t('cNam.softwareVersion') }}</label>
                <el-input v-model="version" class="input"></el-input>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.hardwareVersion') }}</label>
                <el-input v-model="hardVersion" class="input"></el-input>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.model') }}</label>
                <el-input v-model="model" class="input"></el-input>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.clientCode') }}</label>
                <el-input v-model="clientCode" class="input"></el-input>
              </div>
            </div>
            <div v-show="itemRoot === 4 && !isTechnicianUse">
              <div class="item" v-if="!isCan">
                <label class="label">{{ $t('cNam.wheelDiameter') }}</label>
                <span :class="{ errorTip: errorList.indexOf('wheel_size') > -1 }">{{ wheelDiameter }}</span>
              </div>
              <div class="item" v-if="!isCan">
                <label class="label">{{ $t('cNam.speedLimit') }}</label>
                <span :class="{ errorTip: errorList.indexOf('speed_limit') > -1 }">{{ speedLimit }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.softwareVersion') }}</label>
                <span :class="{ errorTip: errorList.indexOf('soft_ver') > -1 }">{{ version }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.hardwareVersion') }}</label>
                <span :class="{ errorTip: errorList.indexOf('hard_ver') > -1 }">{{ hardVersion }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.model') }}</label>
                <span :class="{ errorTip: errorList.indexOf('model') > -1 }">{{ model }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.clientCode') }}</label>
                <span>{{ clientCode }}</span>
              </div>
            </div>
            <!-- 控制器 -->
            <div v-show="itemRoot === 7">
              <div class="item" v-if="!isCan">
                <label class="label">{{ $t('cNam.nmlVolt') }}</label>
                <span :class="{ errorTip: errorList.indexOf('voltage') > -1 }">{{ nmlVolt }}</span>
              </div>
              <div class="item" v-if="!isCan">
                <label class="label">{{ $t('cNam.limitCurrent') }}</label>
                <span :class="{ errorTip: errorList.indexOf('current_limit') > -1 }">{{ limitCurrent }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.softwareVersion') }}</label>
                <span :class="{ errorTip: errorList.indexOf('soft_ver') > -1 }">{{ version }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.hardwareVersion') }}</label>
                <span :class="{ errorTip: errorList.indexOf('hard_ver') > -1 }">{{ hardVersion }}</span>
              </div>
              <div class="item" v-if="!isCan">
                <label class="label">{{ $t('cNam.spdMeterSignalNum') }}</label>
                <span :class="{ errorTip: errorList.indexOf('pas_signals') > -1 }">{{ pasSignals }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.model') }}</label>
                <span :class="{ errorTip: errorList.indexOf('model') > -1 }">{{ model }}</span>
              </div>
              <div class="item" v-if="isCan">
                <label class="label">{{ $t('cNam.speedLimit') }}</label>
                <span :class="{ errorTip: errorList.indexOf('speedLimit') > -1 }">{{ speedLimit }}</span>
              </div>
              <div class="item" v-if="isCan">
                <label class="label">{{ $t('cNam.wheelDiameter') }}</label>
                <span :class="{ errorTip: errorList.indexOf('wheelDiameter') > -1 }">{{ wheelDiameter }}</span>
              </div>
              <div class="item" v-if="isCan">
                <label class="label">{{ $t('cNam.circumference') }}</label>
                <span :class="{ errorTip: errorList.indexOf('circumference') > -1 }">{{ circumference }}</span>
              </div>
            </div>
            <!-- BESST 盒子 -->
            <div v-show="itemRoot === 10">
              <!--<div class="item">
                                <label class="label">Name</label>
                                <span>{{model}}</span>
                            </div>-->
              <div class="item">
                <label class="label">{{ $t('cNam.softwareVersion') }}</label>
                <span>{{ version }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.hardwareVersion') }}</label>
                <span>{{ hardVersion }}</span>
              </div>
              <div class="item">
                <label class="label">{{ $t('cNam.clientCode') }}</label>
                <span>{{ clientCode }}</span>
              </div>
            </div>
            <div class="hardware-item" v-if="itemRoot !== 6 && itemRoot !== 12">
              <div class="operation-holder" v-if="isTechnicianUse">
                <el-button type="primary" @click="next" :disabled="autoOperation">下一个</el-button>
              </div>
              <div class="operation-holder" v-else>
                <el-button type="primary" @click="next" :disabled="!canNext">下一个</el-button>
                <!--<el-button type="primary" @click="next">下一个</el-button>-->
              </div>
            </div>
            <div class="hardware-item" v-else-if="isCan">
              <div class="operation-holder">
                <el-button type="primary" @click="next" :disabled="!canNext">下一个3</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="content-card-item" v-else>
          <label class="content-header">Test Report</label>
          <div class="content-body">
            <div class="hardware-item">
              <div class="input-holder">
                <label class="label">{{ deviceLabel }} Upload</label>
                <el-upload
                  class="upload desc"
                  ref="upload"
                  :action="options.url"
                  :on-success="onSuccess"
                  :multiple="singleUpload"
                  :auto-upload="autoUpload"
                  :data="options.params"
                >
                  <el-button type="primary">Upload</el-button>
                </el-upload>
                <el-button type="primary" @click="submitUpload" class="save-btn">{{ $t('cNam.save') }}</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="content-card-item" v-show="false">
          <label class="content-header">生产数据导出</label>
          <div class="content-body">
            <div class="item">
              <label class="label">生产线编号</label>
              <el-input v-model="opcode" class="inputdata"></el-input>
            </div>
            <div class="item">
              <label class="label">操作人员1</label>
              <el-input v-model="name1" class="inputdata"></el-input>
            </div>
            <div class="item">
              <label class="label">原数据文件夹</label>
              <el-input v-model="filepath" class="inputdata"></el-input>
            </div>
            <div class="item">
              <label class="label">操作人员2</label>
              <el-input v-model="name2" class="inputdata"></el-input>
            </div>

            <div class="item">
              <label class="label">原数据</label>
              <label for="file" class="file"><el-button type="primary">选择文件</el-button></label>
              <input @change="getUploadFile" type="file" id="file" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="loading" v-if="loading">
      <img src="../../../assets/images/icon/loading-bars.svg" alt="Loading icon" />
    </div>

    <!-- 上传失败弹窗 -->
    <el-dialog :title="dialogUploadText" :visible.sync="dialogUploadFailVisible" size="tiny">
      <table border="1">
        <tr>
          <td>SN</td>
        </tr>
        <tr :key="index" v-for="(item, index) in failList">
          <td>{{ item.sn }}</td>
        </tr>
      </table>
    </el-dialog>

    <!--提示弹窗-->
    <el-dialog title="Tip" :visible.sync="dialogTipVisible" size="tiny">
      <p>请检查 {{ tip }}</p>
      <div slot="footer" class="dialog-footer">
        <el-button type="preview" @click="saveComponent">{{ $t('cNam.save') }}</el-button>
        <el-button type="primary" @click="clear()">{{ $t('cNam.cancel') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Core from 'core/core'
import HMI from 'device/hmi'
import Battery from 'device/battery'
import Controller from 'device/controller'
import Tool from 'device/tool'
import Sensor from 'device/sensor'
import ZH from 'src/assets/lang/zh'
import EN from 'src/assets/lang/en'
import DE from 'src/assets/lang/de'
import NL from 'src/assets/lang/nl'
import FR from 'src/assets/lang/fr'
import XLSX, { read } from 'xlsx'
import Update from 'device/update'
import QRCode from 'qrcodejs2'
export default {
  name: '',
  data() {
    return {
      dialogVisible: false,
      itemPass: '',
      orderId: '',
      item: '',
      orderInfo: '',
      itemInfo: '',
      itemRoot: 0,
      attrList: [],
      singleUpload: false,
      autoUpload: false,
      options: {
        url: '',
        paramName: 'file',
        params: {
          token: Core.Data.getToken(),
          order_id: '',
          item_id: ''
        }
      },
      failList: [],
      comList: [],
      com: '',
      deviceList: {
        HMI: HMI,
        battery: Battery,
        controller: Controller,
        tool: Tool,
        Sensor: Sensor
      },
      device: HMI,
      deviceNameList: {
        HMI: 'hmi',
        battery: 'battery',
        controller: 'ctrl',
        tool: 'tool',
        sensor: 'sensor'
      },
      deviceName: '',
      testJson: '',
      deviceLabel: '',
      fileList: '',
      sn: '',
      customer_sn: '',
      model: '',
      version: '',

      wheelDiameter: '',
      speedLimit: '',
      clientCode: '',
      clientCodeText: '',

      nmlVolt: '',
      limitCurrent: '',
      pasSignals: '',
      hardVersion: '',
      circumference: '',
      wheelDiameters: '',

      serviceMileage: '',
      // 上传失败弹框
      dialogUploadText: '',
      dialogUploadFailVisible: false,

      isScanner: false,
      lastInputTime: 0,
      scannerTimeout: 0,
      autoReadTimeout: 0,
      autoNextTimeout: 0,

      isConnected: HMI.port.isConnected(),
      itemOrderInfo: {},
      needAttrList: [],

      //对比值
      hmiAttrValues: {},
      ctrlAttrValues: {},
      senAttrValues: {},
      toolAttrValues: {},

      //提示弹窗
      dialogTipVisible: false,

      tip: '',
      isSaving: false,
      loading: false,

      errorList: [],

      isWrite: false,
      isRead: false,
      writeSnText: '',
      canNext: false,

      snLengthList: [14, 15, 16, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
      snLength: '',
      snLengthCheck: false,
      isCan: false,
      usbHID: false,
      isReset: false,
      target: 0x03,

      reconnectInterval: null,
      connectionIntervalTestReport: null,

      autoOperation: false,
      autoTime: '',
      autoOperationNextTime: 1500,
      autoOperationWriteTime: 800,
      config: {
        hmi: 2800,
        ctrl: 2800,
        sen: 2400
      },
      dialogCustom: 'dialog-custom',
      skipCheckSensor: true,
      filepath: '',
      name1: '葛晶',
      name2: '朱文杰',
      opcode: 'FQC7',

      isTechnicianAccount: false,
      isTechnicianUse: false,
      readInterval: null,
      checkSNType: false,
      checkSNLength: [],
      // IOT SN
      iot_qr: '',
      iot_view_mac: '',
      iot_view_sn: '',
      iot_sn: '',
      iot_mac: '',
      iot_imei: '',
      // 判断是否有多个控制器
      isMoreController: false,
      // 开始/结束sn
      qrSN: {
        current: '',
        start: '',
        end: ''
      },
      // 开始控制按钮
      isStart: false,
      QRCodeMaker: null,
      useScanQR: false,
      // 是否是新法规 - 传感器
      isNewRegulationSEN: false,
      macHmi: '',
      errorCode: '',
      // 显示error code 功能
      showErrorCode: false
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
  },
  computed: {
    isHmiOrCtl: function () {
      return this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.HMI || this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.CONTROLLER
    },
    isCustomer0049: function () {
      const customerId = this.orderInfo.customer_id
      const model = this.itemInfo.name
      return customerId === '0049-0303' && model === 'DP E010.CB'
    }
  },
  mounted: function () {
    this.wheelDiameters = Core.Const.wheelDiameters

    this.orderId = this.$route.query.orderId
    this.itemPass = this.$route.query.item

    console.log('[itemPass]', this.itemPass)
    if (this.itemPass.item_name && this.itemPass.item_name.indexOf('DP') > -1 && this.itemPass.item_name.indexOf('.C') > -1) {
      this.isCan = true
      console.log('[isCan]', this.isCan)
    } else if (
      this.itemPass.item_name &&
      this.itemPass.item_name.indexOf('CR') > -1 &&
      (this.itemPass.item_name.indexOf('.FC') > -1 || this.itemPass.item_name.indexOf('.C') > -1)
    ) {
      this.isCan = true
      console.log('[isCan]', this.isCan)
    } else if (this.itemPass.item_name && this.itemPass.item_name.indexOf('.CCB') > -1) {
      // 新法规 CCB
      this.isCan = true
      console.log('[isCan]', this.isCan)
    } else if (this.itemPass.item_name && this.itemPass.item_name.indexOf('SR') > -1 && this.itemPass.item_name.indexOf('.C') > -1) {
      this.isCan = true
      this.isNewRegulationSEN = true
      console.log('[isCan]', this.isCan)
    } else if (this.itemPass.item_name && this.itemPass.item_name.indexOf('M') > -1 && this.itemPass.item_name.indexOf('.U') == -1) {
      this.isCan = true
      this.checkSNType = true
      console.log('[isCan]', this.isCan)
    }
    // 判断是否使用error code
    if (this.itemPass.item_name.replace(/\s+/g, '').indexOf('DPC') > -1) {
      this.showErrorCode = true
    }

    if (this.isCan) {
      this.config.hmi = 1200
      this.config.ctrl = 2800
      this.config.sen = 1000
      // 等待时间
      this.autoOperationWriteTime = 300
    }
    this.options.params.order_id = this.orderId
    this.options.params.item_id = this.itemPass.item_id
    this.checkConnection()

    setTimeout(() => {
      // 获取订单详情
      this.getProductionOrderDetail(this.orderId)
      // 获取item详情
      this.getItemDetail(this.itemPass.item_id)
    }, 500)
    // technician
    const accountType = Core.Data.get('accountType') || []
    this.isTechnicianAccount = accountType.includes(7) || accountType.includes(11)
    // if (this.isTechnicianAccount) {
    //   this.isCan = true
    // }
  },

  methods: {
    // 初始化QRCode插件
    initQRCode() {
      this.$nextTick(() => {
        try {
          this.QRCodeMaker = new QRCode('qrCode', {
            text: '', // 需要转换为二维码的内容
            width: 120,
            height: 120,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
          })
        } catch (error) {
          console.log(error)
        }
      })
    },
    createSNReset() {
      this.$confirm('确定要重置吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.qrSN = {
            current: '',
            start: '',
            end: ''
          }
          this.isStart = false
          this.QRCodeMaker.clear()
        })
        .catch(() => {})
    },
    createSNStart() {
      // 判断开始/和结束sn是否都存在
      if (this.qrSN.start === '') {
        this.$message.error('开始SN不能为空')
        return false
      }

      // 计算结束sn
      const _end = parseInt(this.qrSN.start.slice(-4)) + this.itemOrderInfo.amount - 1
      this.qrSN.end = this.qrSN.start.slice(0, -4) + _end.toString().padStart(4, '0')

      // 判断开始/和结束sn是否都存在
      if (this.qrSN.start === '' || this.qrSN.end === '') {
        this.$message.error('开始/结束SN不能为空')
        return false
      }

      // 判断开始/结束sn长度是否相同
      if (this.qrSN.start.length !== this.qrSN.end.length) {
        this.$message.error('开始/结束SN长度不相同')
        return false
      }

      // 根据开始/结束sn后四位获取流水号
      const start = parseInt(this.qrSN.start.slice(-4))
      const end = parseInt(this.qrSN.end.slice(-4))

      // 计算流水号数量
      const num = end - start + 1

      // 判断数量为正数
      if (num <= 0) {
        this.$message.error('结束SN不能小于开始SN')
        return false
      }

      // 判断数量是否和订单数量一致
      if (num !== this.itemOrderInfo.amount) {
        this.$message.error('开始/结束SN数量与订单数量不一致')
        return false
      }
      this.isStart = true
      // 根据流水号，设置当前sn
      this.qrSN.current = this.qrSN.start
      if (this.QRCodeMaker != null) this.QRCodeMaker.makeCode(this.qrSN.current)
    },
    createSNPrev() {
      // 当为第一个开始
      if (this.qrSN.current === this.qrSN.start) {
        this.isStart = false
        this.$message.info('已经是第一个SN')
        return false
      }

      // 根据当前sn，获取上一个sn
      const current = parseInt(this.qrSN.current.slice(-4))
      const prev = (current - 1).toString().padStart(4, '0')
      this.qrSN.current = this.qrSN.current.slice(0, -4) + prev
      if (this.QRCodeMaker != null) this.QRCodeMaker.makeCode(this.qrSN.current)
    },
    createSNNext() {
      // 当为最后一个结束
      if (this.qrSN.current === this.qrSN.end) {
        this.isStart = false
        this.$message.info('已经是最后一个SN')
        return false
      }

      // 根据当前sn，获取下一个sn
      const current = parseInt(this.qrSN.current.slice(-4))
      const next = (current + 1).toString().padStart(4, '0')
      this.qrSN.current = this.qrSN.current.slice(0, -4) + next
      if (this.QRCodeMaker != null) this.QRCodeMaker.makeCode(this.qrSN.current)
    },
    // IOT
    iotQRInput(event) {
      const { value } = event.target
      if (value === '') return false
      clearTimeout(this.scannerTimeout)
      this.scannerTimeout = null
      this.scannerTimeout = setTimeout(() => {
        console.log(value)
        if (value.indexOf('\n') > -1) {
          const array = value.split('\n')
          if (array[0] && array[1]) {
            const _mac = array[0].replace(/\s+/g, '')
            const _sn = array[1].replace(/\s+/g, '')

            const length = _mac.length + _sn.length
            if (length !== 30) {
              this.iot_qr = ''
              this.$message.error('二维码格式解析出错')
              this.$nextTick(() => {
                this.focusInput('iot_qr')
              })
              return false
            }
            if (_mac.length !== 17) {
              this.iot_qr = ''
              this.$message.error('MAC长度不符合要求')
              this.$nextTick(() => {
                this.focusInput('iot_qr')
              })
              return false
            }
            if (_sn.length !== 13) {
              this.iot_qr = ''
              this.$message.error('SN长度不符合要求')
              this.$nextTick(() => {
                this.focusInput('iot_qr')
              })
              return false
            }

            this.iot_mac = _mac
            // 设置sn
            this.iot_sn = _sn
            // 清空输入框
            this.iot_qr = ''
            // 设置焦点
            this.$nextTick(() => {
              this.focusInput('iot_imei')
            })
          } else {
            this.iot_qr = ''
            this.$message.error('二维码格式解析出错')
          }
        }
      }, 800)
    },
    iotIMEIInput(event) {
      const { value } = event.target
      if (value === '') return false
      clearTimeout(this.scannerTimeout)
      this.scannerTimeout = null
      this.scannerTimeout = setTimeout(() => {
        if (value.length !== 15) {
          this.iot_imei = ''
          this.$message.error('IMEI长度有误')
        } else {
          this.iot_imei = value
          this.nextSave()
        }
      }, 800)
    },
    focusInput(event) {
      this.$refs[event].focus()
    },
    // 保存当前数据
    nextSave() {
      let id = ''
      let orderId = this.orderId
      let qc = ''
      let testData = this.getTestJson()
      let productTime = Core.Util.time()
      let itemId = this.itemPass.item_id
      let customerSN = this.customer_sn
      let sn = this.iot_sn
      let imei = this.iot_imei
      let mac = this.iot_mac

      if (this.iot_sn === '') {
        this.$message.error('SN不能为空')
        return false
      }
      if (this.iot_mac === '') {
        this.$message.error('MAC不能为空')
        return false
      }
      if (this.iot_imei === '') {
        this.$message.error('IMEI不能为空')
        return false
      }

      Core.Api.Component.saveComponent(id, orderId, sn, qc, testData, productTime, itemId, customerSN, imei, mac)
        .then((res) => {
          this.clearParams()
          this.getProductionOrderDetail(this.orderId)
          this.$message({
            message: this.$t('cNam.saveSuccess'),
            type: 'success',
            duration: 2000,
            showClose: true
          })
          this.$nextTick(() => {
            this.focusInput('iot_qr')
          })
        })
        .catch((res) => {
          this.isSaving = false
        })
    },
    //文件上传
    submitUpload() {
      //  this.autoUpload = true;
      this.loading = true
      this.$refs.upload.submit()
    },

    onSuccess(response, file, fileList) {
      this.loading = false
      if (response.code !== 0) {
        this.$message({
          message: response.message,
          type: 'error'
        })
      } else {
        let failList = response.data && response.data.fail_list
        let successList = response.data && response.data.success_list
        if (failList && failList.length > 0) {
          this.dialogUploadFailVisible = true
          this.dialogUploadText = 'Upload Fail List'
          this.failList = failList
        } else if (successList && successList.length > 0) {
          this.dialogUploadFailVisible = true
          this.dialogUploadText = 'Upload Success List'
          this.failList = successList
        } else {
          const h = this.$createElement
          this.$message({
            message: h('p', null, [
              h('p', null, 'If the SN is duplicated or there is a problem with the file, the completed amount will not increase.'),
              h('p', null, '文件上传成功，服务器会处理，请等待并检查数量。如果SN重复或者文件有问题，已完成数量就不会增加。'),
              h(
                'p',
                { style: 'margin-top: 20px' },
                "File upload successfully! It's processing in the background. Please wait and check the quantity. "
              )
            ]),
            type: 'success',
            duration: 20000,
            customClass: this.dialogCustom
          })
          // this.$message({
          //     message: "File upload successfully! It's processing in the background. Please wait and check the quantity." + "\n" +
          //     "  " + "\n" +
          //     "文件上传成功，服务器会处理，请等待并检查数量。如果SN重复或者文件有问题，已完成数量就不会增加。",
          //     type: 'success',
          // });
          this.getProductionOrderDetail(this.orderId)
        }
      }
    },

    changeCom() {},
    changeSnLength() {
      this.snLengthCheck = true
      this.checkSNLength = []
      this.getDeviceList()
    },
    async getProductionOrderDetail(orderId) {
      await Core.Api.Order.getProductionOrderDetail(orderId).then((res) => {
        this.orderInfo = res.order
        this.getItemOrderInfo(res.order.item_list)
      })
    },

    getItemDetail(id) {
      Core.Api.Item.getItemDetail(id).then((res) => {
        this.itemInfo = res.item
        this.itemRoot = this.itemInfo.category_root_id
        // this.itemRoot = 6
        this.attrList = this.itemInfo.attr_list
        this.getDeviceType()
        this.getDeviceList()
        this.initQRCode()

        //                    console.log(res,"res");
      })
    },

    getDeviceType() {
      debugger
      switch (this.itemRoot) {
        case Core.Const.CATEGORY_ROOT_TYPE.MOTOR:
          this.options.url = Core.Const.NET.END_POINT + '/component/upload-motor'
          this.deviceLabel = 'Motor'
          break
        case Core.Const.CATEGORY_ROOT_TYPE.BATTERY:
          this.options.url = Core.Const.NET.END_POINT + '/component/upload-battery'
          this.deviceLabel = 'Battery'
          break
        case Core.Const.CATEGORY_ROOT_TYPE.CHARGER:
          this.options.url = Core.Const.NET.END_POINT + '/component/upload-charger'
          this.deviceLabel = 'Charger'
          break
        case Core.Const.CATEGORY_ROOT_TYPE.SENSOR:
          this.options.url = Core.Const.NET.END_POINT + '/component/upload-SR'
          this.deviceLabel = 'Sensor'
          break
        case Core.Const.CATEGORY_ROOT_TYPE.CONNECTOR:
          this.deviceLabel = 'Connector'
          break
        case Core.Const.CATEGORY_ROOT_TYPE.IOT:
          this.deviceLabel = 'IOT'
          break
      }
      console.log(this.options)
    },

    checkModelName(modelName) {
      if (!modelName) return
      let dotLength = modelName.split('.').length
      let spaceLength = modelName.split(' ').length
      console.log(`dotLength: ${dotLength} spaceLength: ${spaceLength}`)
      return { dot: dotLength, space: spaceLength }
    },
    checkModelNameMsg() {
      this.$message({
        message: 'SN长度匹配不通过，请查看型号，再次确认',
        type: 'error',
        duration: 4000,
        showClose: true
      })
    },
    getDeviceList() {
      let lengthCheck = this.checkModelName(this.itemPass.item_name)
      let itemNameLength = this.itemPass.item_name.replace(/\s+/g, '').length
      let temLength
      if (this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.HMI) {
        console.log('HMI')
        this.getHmiAttr(this.attrList)
        this.deviceName = this.deviceNameList['HMI']
        this.device = this.deviceList['HMI']
        this.target = 0x03
        const _length = this.hmiAttrValues['hard_ver'].replace(/\s+/g, '').length
        if (lengthCheck.dot === 3 && lengthCheck.space === 4) {
          temLength = itemNameLength + 10
        } else {
          temLength = _length + 13
        }
        this.checkSNLength = [_length + 10, _length + 13]

        if (this.snLengthCheck && !this.checkSNLength.includes(this.snLength)) {
          this.checkModelNameMsg()
        } else if (this.checkSNLength.includes(this.snLength)) {
          this.snLength = this.snLength
        } else {
          this.snLength = temLength
        }
        this.autoOperationNextTime = this.config.hmi
      }
      if (this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.CONTROLLER) {
        console.log('Controller')
        this.getControllerAttr(this.attrList)
        this.deviceName = this.deviceNameList['controller']
        this.device = this.deviceList['controller']
        this.target = this.isMoreController ? 0x0a : 0x02
        if (this.sn.length === 15 && this.sn.slice(0, 2) === '10') {
          this.snLength = 15
        } else {
          if (this.isCan) {
            // if (
            //   this.itemPass.item_name &&
            //   this.itemPass.item_name.indexOf("MM") > -1 &&
            //   this.itemPass.item_name.indexOf(".C") > -1
            // ) {
            //   const _length = this.ctrlAttrValues["hard_ver"].replace(/\s+/g, "").length;
            //   temLength = _length + 13;
            // } else {
            //   if (lengthCheck.dot === 4 && lengthCheck.space === 4) {
            //     temLength = itemNameLength + 10;
            //   } else if (lengthCheck.dot === 3 && lengthCheck.space === 3) {
            //     temLength = itemNameLength + 14;
            //   } else {
            //     temLength = 28;
            //   }
            // }

            const _length = this.ctrlAttrValues['hard_ver'].replace(/\s+/g, '').length
            temLength = _length + 13
            this.checkSNLength = [_length + 10, _length + 13, _length + 14]

            if (this.snLengthCheck && !this.checkSNLength.includes(this.snLength)) {
              this.checkModelNameMsg()
            } else if (this.checkSNLength.includes(this.snLength)) {
              this.snLength = this.snLength
            } else {
              this.snLength = temLength
            }
          } else {
            if (lengthCheck.dot === 5 && lengthCheck.space === 4) {
              temLength = itemNameLength + 10
            } else {
              temLength = 31
            }

            if (this.snLengthCheck && this.snLength !== temLength) {
              this.checkModelNameMsg()
            } else {
              this.snLength = temLength
            }
          }
        }
        this.autoOperationNextTime = this.config.ctrl
      }
      if (this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.TOOL) {
        console.log('Tool')
        this.getToolAttr(this.attrList)
        this.deviceName = this.deviceNameList['tool']
        this.device = this.deviceList['tool']
        this.canNext = true
        if (!this.snLengthCheck) {
          this.snLength = 24
        }
        this.target = 0x05
      }
      if (this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.SENSOR) {
        console.log('Sensor')
        this.getSensorAttr(this.attrList)
        this.deviceName = this.deviceNameList['sensor']
        this.device = this.deviceList['Sensor']
        this.canNext = true
        if (!this.snLengthCheck) {
          this.snLength = 28
        }
        this.target = 0x01
        this.autoOperationNextTime = this.config.sen
      }
      if (!this.device) {
        return
      }
      if (!this.usbHID) {
        if (this.device.port.getPort() != '' && this.device.port.isConnected()) {
          this.com = this.device.port.getPort()
          this.comList = [this.device.port.getPort()]
          this.isConnected = this.device.port.isConnected()
          return
        }
        this.device.port.getPortList().subscribe((res) => {
          if (res.data) {
            this.comList = res.data
            this.com = this.comList[0]
            this.isConnected = this.device.port.isConnected()
          } else {
            this.$message({
              message: this.$t('cNam.noComConnect'),
              type: 'warning'
            })
          }
        })
      }
    },
    checkConnection() {
      let vm = this
      if (vm.connectionIntervalTestReport) {
        clearInterval(vm.connectionIntervalTestReport)
        vm.connectionIntervalTestReport = ''
      }
      vm.connectionIntervalTestReport = setInterval(() => {
        let connection = HMI.port.getConnection()
        if (connection.usb) {
          //                        this.checkUSBUartOrCan();
          vm.usbHID = true
        }
        if (connection.com) {
          vm.usbHID = false
        }
        if (connection.usb || connection.com) {
          vm.init()
          clearInterval(vm.connectionIntervalTestReport)
        }
      }, 300)
    },

    init() {
      HMI.port.startConnection()
      if (HMI.port.getUSBDevice() || this.usbHID) {
        this.usbHID = true
        //                    this.connect();
        if (this.isReset) {
          this.connect()
        } else {
          this.connect(1)
        }
        console.log(' get USB Device HMI')
      } else {
        console.log('COM HMI')
        this.usbHID = false
        this.getComList()
      }
      this.isConnected = HMI.port.isConnected()
    },

    checkConnection() {
      let vm = this
      if (vm.connectionIntervalTestReport) {
        clearInterval(vm.connectionIntervalTestReport)
        vm.connectionIntervalTestReport = ''
      }
      vm.connectionIntervalTestReport = setInterval(() => {
        let connection = HMI.port.getConnection()
        if (connection.usb) {
          //                        this.checkUSBUartOrCan();
          vm.usbHID = true
        }
        if (connection.com) {
          vm.usbHID = false
        }
        if (connection.usb || connection.com) {
          vm.init()
          clearInterval(vm.connectionIntervalTestReport)
        }
      }, 300)
    },

    getComList() {
      //                if (HMI.port.getPort() != '' && HMI.port.isConnected()) {
      //                    this.com = HMI.port.getPort();
      //                    this.comList = [HMI.port.getPort()];
      //                    this.isConnected = HMI.port.isConnected();
      //                    return
      //                }
      HMI.port.getPortList().subscribe((res) => {
        if (res.type === 'port') {
          if (res.data) {
            this.comList = res.data
            this.com = this.comList[0]
            this.connect()
            //                            this.isConnected = HMI.port.isConnected();
          } else {
            this.$message({
              message: this.$t('cNam.noComConnect'),
              type: 'warning'
            })
          }
        }
      })
    },
    connect(type) {
      if (!this.usbHID && !this.com) {
        this.$message({
          message: this.$t('cNam.selectComTip'),
          type: 'warning'
        })
        return
      }
      if (!this.device) {
        return
      }

      if (this.itemPass.item_name && this.itemPass.item_name.indexOf('DP') > -1 && this.itemPass.item_name.indexOf('.C') > -1) {
        this.isCan = true
        console.log('[isCan]', this.isCan)
      } else if (this.itemPass.item_name && this.itemPass.item_name.indexOf('CR') > -1 && this.itemPass.item_name.indexOf('.FC') > -1) {
        this.isCan = true
        console.log('[isCan]', this.isCan)
      } else if (this.itemPass.item_name && this.itemPass.item_name.indexOf('SR') > -1 && this.itemPass.item_name.indexOf('.C') > -1) {
        this.isCan = true
        console.log('[isCan]', this.isCan)
      }
      if (this.usbHID) {
        if (this.isCan) {
          if (type === 1) {
            console.log('Test', 1)
            this.test()
          } else {
            setTimeout(() => {
              console.log('Test', 1)
              this.test()
            }, 1000)
          }
        } else {
          this.test()
        }

        this.isConnected = HMI.port.isConnected()
        //                    if( this.itemRoot !== 4 && this.itemRoot !== 7 ){
        //                        this.isCan = !HMI.port.checkUsbUart();
        //                    }
        console.log('usbHID connect')
        this.device.port.getListenData().subscribe((res) => {
          if (!res.data) {
            return
          }
          // debugger
          // console.log(`res.data:${res.data.source} - ${res.data.sourceCode} -${res.data.subCode}`)
          if (res.data.sourceCode == 10) {
            this.isMoreController = true
          }
          if (res.type == 'error_usb') {
            this.isConnected = false
            this.clearParams()
          }
        })
      } else {
        if (this.com) {
          let bus = this.device.connect(this.com)
          if (bus) {
            bus.subscribe((res) => {
              if (res.type === 'open' || res.type === 'connect') {
                this.isConnected = true
              }
              if (res.type === 'close' || res.type === 'error') {
                this.com = ''
                this.isConnected = false
                //                        this.$message({
                //                            message: 'Com is disconnect',
                //                            type: 'warning'
                //                        });
              }
            })
          }
        }
      }
    },

    test() {
      HMI.port.checkUsbConnection('0101', 1)
    },

    readBaseFun() {
      this.isRead = true
      //                console.log(new Date().getTime(), "isRead start", this.isRead );
      let vm = this
      vm.readBase()
      setTimeout(() => {
        vm.isRead = false
      }, vm.autoOperationNextTime + 100)
    },
    checkSnLengthMsg(step) {
      this.$message({
        message: `please check sn length read，请检查读取的长度。${step}`,
        type: 'error',
        duration: 2000,
        showClose: true
      })
    },
    readBase() {
      const _this = this
      if (!this.isConnected) {
        this.$message({
          message: 'Com is disconnect',
          type: 'warning'
        })
        return
      }
      this.errorList = []
      this.clearParams()
      this.connect(1)

      if (this.target != 0x05) {
        if (!this.isCan || HMI.port.checkUsbUart()) {
          if (!this.usbHID) {
            this.device.connect(this.com)
          }
          this.device.sendCmdGetTestData()
          this.device.getBus().subscribe((res) => {
            if (res.type === 'close' || res.type === 'error') {
              this.isConnected = false
              this.com = ''
            }
            console.log(`0x05 getBus deviceName ${this.deviceName}`)
            const data = res.data && res.data[this.deviceName]

            if (!data) {
              return
            }
            if (data.hasOwnProperty('sn')) {
              let sn = data.sn
              let snLength = sn.length
              this.sn = sn
              console.log(`0x05 getBus ${this.snLength}`)
              if (snLength !== this.snLength) {
                this.checkSnLengthMsg('位置：readBase:target != 0x05 getBus')
                this.canNext = false
              } else {
                this.canNext = true
              }
            }

            if (data.hasOwnProperty('model')) {
              this.model = data.model
              if (this.model != this.itemInfo.name) {
                this.errorList.push('model')
              }
            }

            if (data.hasOwnProperty('version')) {
              this.version = data.version
              if (this.version != this.hmiAttrValues['soft_ver'] && this.version != this.ctrlAttrValues['soft_ver']) {
                this.errorList.push('soft_ver')
              }
            }
            if (data.hasOwnProperty('hardware_version')) {
              this.hardVersion = data.hardware_version
              if (this.hardVersion != this.hmiAttrValues['hard_ver'] && this.hardVersion != this.ctrlAttrValues['hard_ver']) {
                this.errorList.push('hard_ver')
              }
            }

            if (data.hasOwnProperty('speed_limit')) {
              this.speedLimit = data.speed_limit
              if (this.speedLimit != this.hmiAttrValues['speed_limit']) {
                this.errorList.push('speed_limit')
              }
            }

            if (data.hasOwnProperty('wheel_diameter')) {
              this.wheelDiameter = data.wheel_diameter
              if (this.wheelDiameter != this.hmiAttrValues['wheel_size']) {
                this.errorList.push('wheel_size')
              }
            }
            if (data.hasOwnProperty('nml_volt')) {
              this.nmlVolt = data.nml_volt
              if (this.nmlVolt != this.ctrlAttrValues['voltage']) {
                this.errorList.push('voltage')
              }
            }
            if (data.hasOwnProperty('limit_cur')) {
              this.limitCurrent = data.limit_cur
              if (this.limitCurrent != this.ctrlAttrValues['current_limit']) {
                this.errorList.push('current_limit')
              }
            }
            if (data.hasOwnProperty('spd_meter_signal_num')) {
              this.pasSignals = data.spd_meter_signal_num
              if (this.pasSignals != this.ctrlAttrValues['pas_signals']) {
                this.errorList.push('pas_signals')
              }
            }
          })
        } else {
          this.device.port.getUsbBasic(this.target).subscribe((res) => {
            const data = res.data
            if (!data) {
              return
            }
            if (data.hasOwnProperty('sn')) {
              let sn = data.sn
              let snLength = sn.length
              this.sn = sn
              if (snLength !== this.snLength) {
                this.checkSnLengthMsg('位置：readBase:target != 0x05 getUsbBasic')
                this.canNext = false
              } else {
                this.canNext = true
              }
            }

            if (data.hasOwnProperty('model')) {
              this.model = data.model
              if (this.model != this.itemInfo.name) {
                this.errorList.push('model')
              }
            }

            if (data.hasOwnProperty('version')) {
              this.version = data.version
              console.log('version', this.version)
              console.log('hmiAttrValues', this.hmiAttrValues)
              console.log('ctrlAttrValues', this.ctrlAttrValues)
              var flg = this.version.includes(this.hmiAttrValues['soft_ver'])
              console.log('ctrlAttrValues', flg)
              if (!this.version.includes(this.hmiAttrValues['soft_ver']) && !this.version.includes(this.ctrlAttrValues['soft_ver'])) {
                this.errorList.push('soft_ver')
              }
            }
            if (data.hasOwnProperty('hardware_version')) {
              this.hardVersion = data.hardware_version
              if (this.hardVersion != this.hmiAttrValues['hard_ver'] && this.hardVersion != this.ctrlAttrValues['hard_ver']) {
                this.errorList.push('hard_ver')
              }
            }
            if (data.hasOwnProperty('client_code')) {
              this.clientCode = data.client_code
            }
          })
          console.log('--getControllerData-- check 0x02')
          /// 控制器
          if ([0x0a, 0x02].includes(this.target)) {
            console.log('--getControllerData-- start')
            this.device.getControllerData(this.target).then((res) => {
              console.log('--getControllerData--')
              console.log(res)
              var { speedLimit, wheelDiameter, circumference } = res.parsedInfo
              if (!res.parsedInfo) {
                return
              }
              this.speedLimit = speedLimit
              if (this.speedLimit != this.ctrlAttrValues['speed_limit']) {
                this.errorList.push('speedLimit')
              }
              this.wheelDiameter = wheelDiameter
              if (this.wheelDiameter != this.ctrlAttrValues['wheel_diameter']) {
                this.errorList.push('wheelDiameter')
              }

              this.circumference = circumference
              if (this.circumference != this.ctrlAttrValues['circuference']) {
                this.errorList.push('circumference')
              }
            })
            // 监听广播包
            this.device.port.getListenData().subscribe((res) => {
              if (!res.data) {
                return
              }
              if (res.type == 'error_usb') {
                this.isConnected = false
              }
              if (res.cpd) {
                this.speedLimit = res.cpd._3203_ct_sl
                if (this.speedLimit != this.ctrlAttrValues['speed_limit']) {
                  this.errorList.push('speedLimit')
                }
                this.wheelDiameters.find((item) => {
                  if (item.value == res.cpd._3203_ct_wd) {
                    this.wheelDiameter = item.label
                    if (this.wheelDiameter != this.ctrlAttrValues['wheel_diameter']) {
                      this.errorList.push('wheelDiameter')
                    }
                  }
                })
                this.circumference = res.cpd._3203_ct_cf
                if (this.circumference != this.ctrlAttrValues['circuference']) {
                  this.errorList.push('circumference')
                }
              }
            })
          }
        }
      } else if (this.target == 0x05) {
        if (!this.usbHID) {
          this.device.connect(this.com)
          this.device.sendCmdGetTestData()
          this.device.getBus().subscribe((res) => {
            if (res.type === 'close' || res.type === 'error') {
              this.isConnected = false
              this.com = ''
            }
            const data = res.data && res.data[this.deviceName]

            if (!data) {
              return
            }

            if (data.hasOwnProperty('sn')) {
              let sn = data.sn
              let snLength = sn.length
              this.sn = sn
              if (snLength !== this.snLength) {
                this.checkSnLengthMsg('位置：readBase:target == 0x05 getBus')
                this.canNext = false
              } else {
                this.canNext = true
              }
            }

            if (data.hasOwnProperty('model')) {
              this.model = data.model
              if (this.model != this.itemInfo.name) {
                this.errorList.push('model')
              }
            }

            if (data.hasOwnProperty('version')) {
              this.version = data.version
              if (this.version != this.toolAttrValues['soft_ver']) {
                this.errorList.push('soft_ver')
              }
            }
            if (data.hasOwnProperty('hardware_version')) {
              this.hardVersion = data.hardware_version
              if (this.version != this.toolAttrValues['hard_ver']) {
                this.errorList.push('hard_ver')
              }
            }

            if (data.hasOwnProperty('client_code')) {
              this.clientCode = data.client_code
            }
          })
        } else {
          Tool.port.getUsbBoxBasic().subscribe((res) => {
            const data = res.data

            if (!data) {
              return
            }

            if (data.hasOwnProperty('sn')) {
              let sn = data.sn
              let snLength = sn.length
              this.sn = sn
              if (snLength !== this.snLength) {
                this.checkSnLengthMsg('位置：readBase:target == 0x05 getUsbBoxBasic')
                this.canNext = false
              } else {
                this.canNext = true
              }
            }

            if (data.hasOwnProperty('version')) {
              this.version = data.version
              if (this.version != this.toolAttrValues['soft_ver']) {
                this.errorList.push('soft_ver')
              }
            }
            if (data.hasOwnProperty('hardware_version')) {
              this.hardVersion = data.hardware_version
              if (this.version != this.toolAttrValues['hard_ver']) {
                this.errorList.push('hard_ver')
              }
            }
            if (data.hasOwnProperty('client_code')) {
              this.clientCode = data.client_code
            }
          })
        }
      }
    },
    writeSn() {
      if (!this.device) {
        return
      }
      if (!this.sn) {
        this.$message({
          message: 'Please in put SN. 请输入SN',
          type: 'warning',
          duration: 2000,
          showClose: true
        })
        return
      }
      this.writeSnText = this.sn.replace(/\s/g, '')
      let snLength = this.writeSnText.length
      if (snLength !== this.snLength) {
        this.checkSnLengthMsg('位置：writeSn')
        return
      }
      this.isWrite = true
      setTimeout(() => {
        this.isWrite = false
      }, 800)
      if (this.target != 0x05) {
        if (!this.isCan || HMI.port.checkUsbUart()) {
          if (this.clientCodeText != '' && this.device == HMI) {
            console.log('client code true')
            this.device.writeClientCode(this.clientCodeText.replace(/\s/g, ''))
          }
          if (this.target == 0x01) {
            return
          }

          this.device.writeSn(this.writeSnText)

          this.device.getBus().subscribe((res) => {
            //                            console.log(res);
            if (res.type === 'close' || res.type === 'error') {
              this.isConnected = false
              this.com = ''
            }
            if (res.data) {
              switch (this.itemRoot) {
                case Core.Const.CATEGORY_ROOT_TYPE.HMI:
                  if (res.data.hmi && 'sn' in res.data.hmi) {
                    let sn = res.data.hmi.sn
                    if (sn === this.writeSnText) {
                      this.sn = ''

                      setTimeout(() => {
                        this.$message({
                          message: this.$t('cNam.writeSuccess') + this.$t('cNam.sn'),
                          type: 'success',
                          duration: 2000,
                          showClose: true
                        })
                      }, 100)
                    } else {
                      this.$message({
                        message: 'Write failed sn, 写SN失败',
                        type: 'error',
                        duration: 2000,
                        showClose: true
                      })
                    }
                  }

                  if (res.data.hmi && 'client_code' in res.data.hmi) {
                    let code = res.data.hmi.client_code
                    if (code === this.clientCodeText) {
                      setTimeout(() => {
                        this.$message({
                          message: this.$t('cNam.writeSuccess') + this.$t('cNam.clientCode'),
                          type: 'success',
                          duration: 2000,
                          showClose: true
                        })
                      }, 100)
                    } else {
                      this.$message({
                        message: 'Write failed cCode, 写客户号失败',
                        type: 'error',
                        duration: 2000,
                        showClose: true
                      })
                    }
                  }
                  this.isWrite = false

                  break
                case Core.Const.CATEGORY_ROOT_TYPE.CONTROLLER:
                  if (res.data.ctrl && 'sn' in res.data.ctrl) {
                    let sn = res.data.ctrl.sn
                    if (sn === this.writeSnText || sn === ' ') {
                      setTimeout(() => {
                        this.sn = ''
                        this.$message({
                          message: this.$t('cNam.writeSuccess') + this.$t('cNam.sn'),
                          type: 'success',
                          duration: 2000,
                          showClose: true
                        })
                      }, 100)
                    } else {
                      this.$message({
                        message: 'Write failed sn，写SN失败',
                        type: 'error',
                        duration: 2000,
                        showClose: true
                      })
                    }
                    this.isWrite = false
                  }
                  // this.sn = Core.Util.get(res, 'data.ctrl.sn', this.sn);
                  break
              }
            }
          })
        } else {
          this.device.port.usbSDK.machineInformation.update
            .serialNumber(0x05, this.target, this.device.port.Core.Util.stringToHex(this.writeSnText))
            .then((res) => {
              //                                console.log(res);
              if (res.can === 'NORMAL_ACK') {
                setTimeout(() => {
                  this.sn = ''
                  this.$message({
                    message: this.$t('cNam.writeSuccess') + this.$t('cNam.sn'),
                    type: 'success',
                    duration: 2000,
                    showClose: true
                  })
                  this.sn = res.dataParsed
                  if (this.clientCodeText !== '') {
                    console.log('client code true')
                    this.device.port.usbSDK.machineInformation.update
                      .customerNumber(0x05, this.target, this.device.port.Core.Util.stringToHex(this.clientCodeText.replace(/\s/g, '')))
                      .then((res) => {
                        if (res.can === 'NORMAL_ACK') {
                          setTimeout(() => {
                            this.$message({
                              message: this.$t('cNam.writeSuccess') + this.$t('cNam.clientCode'),
                              type: 'success',
                              duration: 2000,
                              showClose: true
                            })
                          }, 100)
                        } else {
                          this.$message({
                            message: this.$t('cNam.writeFail') + this.$t('cNam.clientCode'),
                            type: 'error',
                            duration: 2000,
                            showClose: true
                          })
                        }
                      })
                      .catch((err) => {
                        console.log(err)
                        this.usbErrorCheck(err)
                      })
                      .finally(() => {})
                  }
                }, 100)
              } else {
                this.$message({
                  message: this.$t('cNam.writeFail') + this.$t('cNam.sn'),
                  type: 'error',
                  duration: 2000,
                  showClose: true
                })
              }
            })
            .catch((err) => {
              console.log(err)
              this.usbErrorCheck(err)
            })
            .finally(() => {})
        }
      } else if (this.target === 0x05) {
        let sntem = Tool.port.Core.Util.stringToHex(this.sn.replace(/\s/g, ''))
        let snlen = Buffer.from([sntem.length / 2]).toString('Hex')
        Tool.port.usbSDK.client
          .serialNumber(snlen + sntem)
          .then((res) => {
            setTimeout(() => {
              this.sn = ''
              this.$message({
                message: this.$t('cNam.writeSuccess') + 'SN(序列号)',
                type: 'success',
                duration: 2000,
                showClose: true
              })
            }, 100)
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {})
      }
    },
    // 读取Error code
    async readErrorCode() {
      this.errorCode = ''
      var res = await this.device.port.usbSDK.machineInformation.get.errorCode(0x05, this.target)

      // 两个字符之间加逗号
      this.errorCode = res.dataParsed.trim().replace(/(.{2})/g, '$1,')

      if (this.errorCode) {
        // 弹窗提示是否清除（阻塞）
        try {
          var msg = await this.$confirm('是否清除错误代码', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
          if (msg == 'confirm') {
            // 清除错误代码
            await this.device.port.usbSDK.machineInformation.update.errorCode(0x05, this.target, '00')

            // 等待2秒
            await new Promise((resolve) => setTimeout(resolve, 2000))
            // 重新读取
            return await this.readErrorCode()
          } else {
            return false
          }
        } catch (error) {
          // 用户取消了确认框
          return false
        }
      } else {
        return true
      }
    },
    usbErrorCheck(err) {
      this.device.port.checkUsbError(err)
    },

    clearParams() {
      this.sn = ''
      if (!this.isTechnicianUse) {
        this.model = ''
        this.version = ''
        this.wheelDiameter = ''
        this.speedLimit = ''
        this.nmlVolt = ''
        this.limitCurrent = ''
        this.pasSignals = ''
        this.hardVersion = ''
        this.serviceMileage = ''
        this.circumference = ''
        this.clientCode = ''
        this.testJson = []
        this.iot_sn = ''
        this.iot_mac = ''
        this.iot_imei = ''
        this.macHmi = ''
      }
    },

    getTestJson() {
      let params = {}
      params['soft_ver'] = this.version.trim()
      params['model'] = this.model.trim()
      if (this.isCan) {
        params['hard_ver'] = this.hardVersion.trim()
        switch (this.itemRoot) {
          case Core.Const.CATEGORY_ROOT_TYPE.HMI:
            params['client_code'] = this.clientCode.trim()
            break
          case Core.Const.CATEGORY_ROOT_TYPE.SENSOR:
            params['client_code'] = this.clientCode.trim()
            break
          case Core.Const.CATEGORY_ROOT_TYPE.TOOL:
            break
          case Core.Const.CATEGORY_ROOT_TYPE.CONTROLLER:
            params['wheel_size'] = this.wheelDiameter
            params['speed_limit'] = this.speedLimit
            params['circumference'] = this.circumference
            //                            params['voltage'] = this.nmlVolt;
            //                            params['current_limit'] = this.limitCurrent;
            params['client_code'] = this.clientCode.trim()
            // console.log(params);
            break
        }
      } else {
        switch (this.itemRoot) {
          case Core.Const.CATEGORY_ROOT_TYPE.HMI:
            params['wheel_size'] = this.wheelDiameter
            params['speed_limit'] = this.speedLimit
            params['hard_ver'] = this.hardVersion.trim()
            params['client_code'] = this.clientCode.trim()
            break
          case Core.Const.CATEGORY_ROOT_TYPE.SENSOR:
            break
          case Core.Const.CATEGORY_ROOT_TYPE.TOOL:
            params['hard_ver'] = this.hardVersion.trim()
            break
          case Core.Const.CATEGORY_ROOT_TYPE.CONTROLLER:
            params['voltage'] = this.nmlVolt
            params['current_limit'] = this.limitCurrent
            params['hard_ver'] = this.hardVersion.trim()
            // console.log(params);
            break
        }
      }

      if (params && params !== '') {
        return JSON.stringify(params)
      }

      return ''
    },

    checkHMI() {
      this.tip = ''
      //                if (this.model != this.itemInfo.name.substr(0, this.model.length)) {
      //                    this.tip = "Model ";
      //                }
      if (!this.version.replace(/\s/g, '').includes(this.hmiAttrValues['soft_ver'].replace(/\s/g, ''))) {
        this.tip = this.tip + ', Software Version'
      }
      if (this.hardVersion.replace(/\s/g, '') != this.hmiAttrValues['hard_ver'].replace(/\s/g, '')) {
        this.tip = this.tip + ', Hardware Version'
      }
      if (!this.isCan) {
        if (this.speedLimit != this.hmiAttrValues['speed_limit']) {
          this.tip = this.tip + ', Speed Limit'
        }
        if (this.wheelDiameter != this.hmiAttrValues['wheel_size']) {
          this.tip = this.tip + ', Wheel Size'
        }
      }
      if (this.tip !== '') {
        return false
      }
      return true
    },

    checkController() {
      this.tip = ''
      //                if (this.model !== this.itemInfo.name.substr(0, this.model.length)) {
      //                    this.tip = "Model ";
      //                }
      if (!this.version.replace(/\s/g, '').includes(this.ctrlAttrValues['soft_ver'].replace(/\s/g, ''))) {
        this.tip = this.tip + ', Software Version'
      }
      if (this.hardVersion.replace(/\s/g, '') != this.ctrlAttrValues['hard_ver'].replace(/\s/g, '')) {
        this.tip = this.tip + ', Hardware Version'
      }
      if (!this.isCan) {
        if (this.nmlVolt != this.ctrlAttrValues['voltage']) {
          this.tip = this.tip + ', Voltage'
        }
        if (this.limitCurrent != this.ctrlAttrValues['current_limit']) {
          this.tip = this.tip + ', Limit Current'
        }
        if (this.pasSignals != this.ctrlAttrValues['pas_signals']) {
          this.tip = this.tip + ', Pas Signals'
        }
      } else {
        if (this.circumference != this.ctrlAttrValues['circuference']) {
          this.tip = this.tip + ', Circumference'
        }
        if (this.wheelDiameter != this.ctrlAttrValues['wheel_diameter']) {
          this.tip = this.tip + ', Wheel diameter'
        }
        if (this.speedLimit != this.ctrlAttrValues['speed_limit']) {
          this.tip = this.tip + ', Speed limit'
        }
      }
      if (this.tip !== '') {
        return false
      }
      return true
    },

    checkSensor() {
      this.tip = ''
      //                if (this.model != this.itemInfo.name.substr(0, this.model.length)) {
      //                    this.tip = "Model ";
      //                }
      if (this.version.replace(/\s/g, '') != this.senAttrValues['soft_ver'].replace(/\s/g, '')) {
        this.tip = this.tip + ', Software Version'
      }
      if (this.hardVersion.replace(/\s/g, '') != this.senAttrValues['hard_ver'].replace(/\s/g, '')) {
        this.tip = this.tip + ', Hardware Version'
      }
      if (this.tip !== '') {
        return false
      }
      return true
    },

    handleEnter() {
      console.log(1)
    },

    next() {
      let sn = this.sn.replace(/\s/g, '')
      if (sn.length !== this.snLength) {
        this.checkSnLengthMsg('位置：next')
        return
      }

      if (this.customer_sn != '' && this.customer_sn.length > 31) {
        this.customer_sn = ''
        this.sn = ''
        this.$message({
          message: '客户SN长度不符',
          type: 'warning',
          duration: 2000,
          showClose: true
        })
        return
      }

      if (this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.HMI) {
        if (this.isTechnicianUse) {
          if (this.sn.indexOf('DPC350') > -1) {
            this.saveComponent()
          } else {
            this.$message({
              message: '仪表型号不支持，请切换账户',
              type: 'warning'
            })
            return
          }
        } else {
          if (this.checkHMI()) {
            this.saveComponent()
          } else {
            this.dialogTipVisible = true
          }
        }
      }
      if (this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.CONTROLLER) {
        if (this.checkController()) {
          this.saveComponent()
        } else {
          this.dialogTipVisible = true
        }
      }
      if (this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.SENSOR) {
        if (this.isCan) {
          if (this.checkSensor() || this.skipCheckSensor) {
            this.saveComponent()
          } else {
            this.dialogTipVisible = true
          }
        } else {
          this.saveComponent()
        }
      }
      if (this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.TOOL) {
        this.saveComponent()
      }
    },
    saveComponentAdmin() {
      //                if (this.isSaving) {
      //                    return;
      //                }
      //                if (!this.sn) {
      //                    this.$message({
      //                        message: "Please input sn",
      //                        type: 'warning'
      //                    });
      //                    return;
      //                }
      this.isSaving = true
      let id = ''
      let orderId = this.orderId
      let count = 2001
      let sn = 'BESST.UC3.0.3A31F8U227'
      let qc = ''

      let testData = '{"soft_ver":"BSF33.05","model":"","hard_ver":"BESST.UC 3.0.3"}'
      //                let testData = '  {"soft_ver":"CRS10LC4315E101003.0","model":"CR S10L.350.FC","hard_ver":"CR S10L.350.FC 1.0","wheel_size":"28","speed_limit":25,"circumference":2249,"client_code":""} ';
      // console.log(JSON.parse(testData));
      //                let testData = '';
      let itemId = this.itemPass.item_id
      let vm = this
      this.readInterval = setInterval(() => {
        let productTime = Core.Util.time()
        let tem = sn + ('000' + count).substr(-4)
        count++
        console.log(tem)
        //                    Core.Api.Component.saveComponent(id, orderId, tem, qc, testData, productTime, itemId).then(res => {
        //                        if (this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.CONTROLLER || this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.HMI ) {
        //                            this.canNext = false;
        //                        }
        //
        ////                        this.clearParams();
        ////                        this.getProductionOrderDetail(this.orderId);
        //                        this.$message({
        //                            message: 'Save successfully',
        //                            type: 'success'
        //                        });
        //                        this.dialogTipVisible = false;
        //                        this.isSaving = false;
        //                    }).catch(res => {
        //                        this.isSaving = false;
        //                    });
        if (count > 2004) {
          clearInterval(vm.readInterval)
          vm.readInterval = null
        }
      }, 2000)
    },
    saveComponent() {
      if (this.isSaving) {
        return
      }
      let sn = this.sn.replace(/\s/g, '')

      if (!this.sn) {
        this.$message({
          message: 'Please input sn, 请输入SN',
          type: 'warning',
          duration: 2000,
          showClose: true
        })
        return
      } else if (!this.checkSNType) {
        // 料号是1168030100024 不需要判断型号和SN前面是否一致

        let needCheck = this.itemInfo.ext_part_no !== '1168030100024'
        let name = this.itemInfo.name.replace(/\s/g, '')

        if (needCheck && name.substr(0, 6).toUpperCase() !== sn.substr(0, 6).toUpperCase()) {
          this.$message({
            message: 'SN 内容和型号不匹配，请确认',
            type: 'error',
            duration: 2000,
            showClose: true
          })
          return
        }
      }

      this.isSaving = true
      let id = ''
      let orderId = this.orderId
      let qc = ''
      let testData = this.getTestJson()
      let productTime = Core.Util.time()
      let itemId = this.itemPass.item_id
      let customerSN = this.customer_sn
      //                console.log( id, orderId, sn, qc, testData, productTime, itemId );

      // 生成下一个sn二维码
      if (this.useScanQR) this.createSNNext()

      Core.Api.Component.saveComponent(
        id,
        orderId,
        sn,
        qc,
        testData,
        productTime,
        itemId,
        customerSN,
        '',
        '',
        this.qrSN.start,
        this.qrSN.end,
        this.qrSN.current,
        '',
        '',
        '',
        '',
        this.macHmi
      )
        .then((res) => {
          if (
            this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.CONTROLLER ||
            this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.HMI ||
            this.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.SENSOR
          ) {
            this.canNext = false
          }
          this.clearParams()

          this.getProductionOrderDetail(this.orderId)

          this.$message({
            message: this.$t('cNam.saveSuccess'),
            type: 'success',
            duration: 2000,
            showClose: true
          })
          this.dialogTipVisible = false
          this.isSaving = false
        })
        .catch((res) => {
          this.isSaving = false
        })
    },

    getItemOrderInfo(list) {
      let $this = this
      let newList = list.filter(function (item) {
        return item.item_id == $this.itemPass.item_id
      })
      const data = newList[0]
      this.itemOrderInfo = data
      // 获取qrSN
      if (data) {
        const { start_sn, end_sn, current_sn } = data
        this.qrSN.start = start_sn || ''
        this.qrSN.end = end_sn || ''
        this.qrSN.current = current_sn || ''
        if (this.QRCodeMaker != null) this.QRCodeMaker.makeCode(this.qrSN.current)
      }

      if (this.itemOrderInfo && this.itemOrderInfo.produced >= this.itemOrderInfo.amount) {
        this.$message({
          message: 'The item is finished，订单已完成',
          type: 'warning'
        })
        this.$router.back()
      }
    },

    getHmiAttr(attrList) {
      //            	wheelSize speedlimit swVer hwVer
      if (attrList.length <= 0) {
        return
      }
      let needNameList
      //                console.log(this.needAttrList);
      needNameList = ['wheel_size', 'speed_limit', 'soft_ver', 'hard_ver']
      if (this.usbHID && this.isCan) {
        needNameList = ['soft_ver', 'hard_ver']
      }
      this.needAttrList = attrList.filter((item, index) => {
        return needNameList.indexOf(item.attr_def_key) > -1
      })
      this.needAttrList.forEach((item, index) => {
        this.hmiAttrValues[item.attr_def_key] = item.value + ''
      })
    },

    getControllerAttr(attrList) {
      if (attrList.length <= 0) {
        return
      }
      let needNameList
      //                console.log(this.needAttrList);
      needNameList = ['voltage', 'current_limit', 'soft_ver', 'hard_ver', 'pas_signals']
      if (this.usbHID && this.isCan) {
        needNameList = ['circuference', 'wheel_diameter', 'speed_limit', 'soft_ver', 'hard_ver']
      }
      this.needAttrList = attrList.filter((item, index) => {
        return needNameList.indexOf(item.attr_def_key) > -1
      })
      //                console.log(this.needAttrList);
      this.needAttrList.forEach((item, index) => {
        this.ctrlAttrValues[item.attr_def_key] = item.value + ''
      })
      //            	voltage currentLimit swVer hwVer pas signals
    },
    getSensorAttr(attrList) {
      if (attrList.length <= 0) {
        return
      }
      let needNameList = ['soft_ver', 'hard_ver']
      this.needAttrList = attrList.filter((item, index) => {
        return needNameList.indexOf(item.attr_def_key) > -1
      })
      this.needAttrList.forEach((item, index) => {
        this.senAttrValues[item.attr_def_key] = item.value + ''
      })
    },
    getToolAttr(attrList) {
      if (attrList.length <= 0) {
        return
      }
      let needNameList = ['soft_ver', 'hard_ver']
      this.needAttrList = attrList.filter((item, index) => {
        return needNameList.indexOf(item.attr_def_key) > -1
      })
      this.needAttrList.forEach((item, index) => {
        this.toolAttrValues[item.attr_def_key] = item.value + ''
      })
    },

    clear() {
      this.isWrite = false
      this.isRead = false
      this.isSaving = false
      this.loading = false
      this.writeSnText = ''
      this.canNext = false
      this.dialogTipVisible = false
    },

    reset() {
      this.isReset = true
      setTimeout(() => {
        this.isReset = false
      }, 1000)
      this.clearParams()
      this.clear()
      this.device.port.reset(100)
    },
    setAutoTime() {
      let tem = parseInt(this.autoTime)
      if (tem > 800 && tem < 5000) {
        this.autoOperationNextTime = tem
      } else {
        this.$message({
          message: '请在 800 - 5000范围内设置',
          type: 'error'
        })
      }
    },

    //  电机数据上传
    openDownloadDialog(url, saveName) {
      if (typeof url == 'object' && url instanceof Blob) {
        url = URL.createObjectURL(url) // 创建blob地址
      }
      var aLink = document.createElement('a')
      aLink.href = url
      aLink.download = saveName || '' // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
      var event
      if (window.MouseEvent) {
        event = new MouseEvent('click')
      } else {
        event = document.createEvent('MouseEvents')
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      }
      aLink.dispatchEvent(event)
    },
    csv2sheet(csv) {
      var sheet = {} // 将要生成的sheet
      csv = csv.split('\n')
      csv.forEach(function (row, i) {
        if (row.search(/Bafang/i) == -1) {
          row = row.split(',')
          // console.log(row);
        }
        if (i == 0) sheet['!ref'] = 'A1:' + String.fromCharCode(65 + 9) + (csv.length - 1)
        if (typeof row != 'string') {
          row.forEach(function (col, j) {
            if (col != '') {
              sheet[String.fromCharCode(65 + j - 1) + (i + 1)] = { v: col }
            }
          })
        } else {
          sheet[String.fromCharCode(65) + 1] = { v: row }
        }
      })
      return sheet
    },
    fixdata(data) {
      //文件流转BinaryString
      var o = '',
        l = 0,
        w = 10240
      for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
      return o
    },
    getList1(wb) {
      var wbData = wb.Sheets[wb.SheetNames[0]] // 读取的excel单元格内容
      var re = /^[A-Z]1$/ // 匹配excel第一行的内容
      var arr1 = []
      for (var key in wbData) {
        // excel第一行内容赋值给数组
        if (wbData.hasOwnProperty(key)) {
          if (re.test(key)) {
            arr1.push(wbData[key].h)
          }
        }
      }
      return arr1
    },

    getUploadFile(e) {
      //获取目标文件夹
      let file = document.getElementById('file').files[0]
      let path = file.path
      let index = path.lastIndexOf('\\')
      this.filepath = path.substring(0, index + 1)
      //拿到所导入文件的名字
      let fileName = e.target.files[0]
      //定义reader，存放文件读取方法
      let reader = new FileReader()
      //启动函数
      reader.readAsBinaryString(fileName)
      let that = this
      //onload在文件被读取时自动触发
      reader.onload = function (e) {
        //workbook存放excel的所有基本信息
        let workbook = XLSX.read(e.target.result, { type: 'binary' })
        // var xlsxData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
        // var list1 = that.getList1(workbook);
        // let handleXlsxData = [xlsxData[0],xlsxData[1],xlsxData[2]];
        // let count = 0;
        // xlsxData.map((item,index)=>{
        //     Object.keys(item).forEach((nextItem)=>{
        //         if(index>2&&nextItem ==='__EMPTY'){
        //             if(item[nextItem].indexOf(that.itemInfo.name)>-1){
        //                 handleXlsxData.push(item);
        //                 count++;
        //             }
        //         }
        //     })
        // })
        // list1+=``;
        // that.createExcel(handleXlsxData,list1,count)
        //定义sheetList中存放excel表格的sheet表
        let sheetList = workbook.SheetNames
        let worksheet = workbook.Sheets[sheetList[0]]
        //把sheet解析成csv
        let xlsxcsv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetList[0]])
        //替换csv中的“,”为“.”
        var newxlsx = xlsxcsv.replace(/\"([^\"]*)\"/g, function (kw) {
          return kw.replace(/,/g, '.').replace(/\"/g, '')
        })
        var value = that.itemInfo.name
        //    var reg = new RegExp(value,"g");
        var val = value.replace(/\./g, '\\.').replace(/\s/, '\\s+')
        var reg = new RegExp('(.+)' + val + '(.+)\\n', 'g')
        var arr1 = newxlsx.match(reg)
        let customerId = that.orderInfo.customer_id
        arr1 = arr1.filter((item) => {
          return item.indexOf(customerId) > -1
        })
        if (arr1) {
          var newcsv = arr1.join()
          let title = `${newxlsx.substring(0, newxlsx.lastIndexOf(')') + 1)}(${arr1.length})`
          newcsv =
            'Suzhou Bafang Electric Motor Science-Technology Co.,Ltd\n,Testing Reprot of Motor\n,,,生产日期:,2019/8/13,操作员:' +
            that.name1 +
            '(' +
            arr1.length +
            '),' +
            that.name2 +
            ',' +
            '\n,电机型号,电机编号,转矩(N.m),转速(r/min),输出功率(W),电压(V),电流(A),效率(%)\n,' +
            newcsv
          // newcsv = title + newcsv;
          let currentTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
          let model = that.itemInfo.name,
            opcode = that.opcode,
            orderId = that.orderId
          var newsheet = that.csv2sheet(newcsv)
          var blob = that.sheet2blob(newsheet, 'sheet1')
          let name = `${orderId} ${opcode} ${model} ${currentTime} (${arr1.length}).xlsx`
          that.openDownloadDialog(blob, name)
        } else {
          that.$message({
            message: '没有找到当前订单型号的测试数据',
            type: 'error'
          })
        }
      }
    },
    sheet2blob(sheet, sheetName) {
      sheetName = sheetName || 'sheet1'
      var workbook = {
        SheetNames: [sheetName],
        Sheets: {}
      }
      workbook.Sheets[sheetName] = sheet
      // 生成excel的配置项
      var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
      }
      var wbout = XLSX.write(workbook, wopts)
      var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' })
      // 字符串转ArrayBuffer
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
        return buf
      }
      return blob
    },
    createExcel(data, head, count) {
      var tableHtml = '<html><head><meta charset="UTF-8"></head><body>'
      var lHtml =
        "<table border='1' style='width: 750px;height: 242px; border:1px solid ;border-collapse: collapse;border-color:#000;background-color:white;' align='center'><p style='text-align:center'>" +
        head +
        '</p>'
      let keys1 = Object.keys(data[3]),
        keys2 = Object.keys(data[2])
      data.forEach((item, index) => {
        if (index < 2) {
          lHtml += '<p style="text-align: center;">'
          let info = ''
          Object.keys(item).forEach((nextItem, nextIndex) => {
            if (nextIndex < Object.keys(item).length - 1) {
              info += `${item[nextItem]}`
            } else {
              if (index === 1) {
                info += `${item[nextItem]}(${count})</p>`
              } else {
                info += `${item[nextItem]}</p>`
              }
              lHtml += info
            }
          })
        }
      })
      console.log(lHtml)
      lHtml += '<thead><tr>'
      keys2.forEach((item, index) => {
        if (index < keys2.length - 1) {
          lHtml += `<th>${data[2][item]}</th>`
        } else {
          lHtml += `<th>${data[2][item]}</th></tr><thead><tr>`
        }
      })
      data.forEach((item, index) => {
        if (index < 2) {
          Object.keys(item).forEach((nextItem, nextIndex) => {
            if (nextIndex < Object.keys(item).length - 1) {
              head += item[nextItem]
            } else {
              head += item[nextItem] + '\n'
            }
          })
        } else if (index > 2) {
          for (var i in item) {
            if (index < data.length - 1) {
              if (i == keys1[Object.keys(item).length - 1]) {
                lHtml += `<td>${item[i]}</td></tr><tr>`
              } else {
                lHtml += `<td>${item[i]}</td>`
              }
            } else {
              if (i == keys1[Object.keys(item).length - 1]) {
                lHtml += `<td>${item[i]}</td></tr></table>`
              } else {
                lHtml += `<td>${item[i]}</td>`
              }
            }
          }
        }
      })
      tableHtml += lHtml
      tableHtml += '</body></html>'
      let currentTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
      let model = this.itemInfo.name,
        opcode = this.opcode,
        orderId = this.orderId
      var excelBlob = new Blob([tableHtml], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })
      let fileName = `${orderId} ${opcode} ${model} ${currentTime} (${count}).xls`
      var oa = document.createElement('a')
      oa.href = URL.createObjectURL(excelBlob)
      oa.download = fileName
      document.body.appendChild(oa)
      oa.click()
    }
  },

  beforeDestroy: function () {
    if (this.reconnectInterval) {
      clearInterval(this.reconnectInterval)
      this.reconnectInterval = null
    }
    if (this.connectionIntervalTestReport) {
      clearInterval(this.connectionIntervalTestReport)
      this.connectionIntervalTestReport = null
    }
    if (this.readInterval) {
      clearInterval(this.readInterval)
      this.readInterval = null
    }
    HMI.port.setBoxOperation()
  },
  directives: {
    focus: function (el, option) {
      var defClass = 'el-input',
        defTag = 'input'
      var value = option.value || true
      if (typeof value === 'boolean') {
        value = { cls: defClass, tag: defTag, foc: value }
      } else {
        value = {
          cls: value.cls || defClass,
          tag: value.tag || defTag,
          foc: value.foc || false
        }
      }
      if (el.classList.contains(value.cls) && value.foc) {
        el.getElementsByTagName(value.tag)[0].focus()
      }
    }
  },
  watch: {
    sn: async function (newValue, oldValue) {
      let vm = this
      if (newValue === oldValue || newValue === '' || vm.isRead) {
        return
      }
      if (typeof oldValue !== 'undefined' && oldValue.length > 15) {
        let time = new Date().getTime()
        vm.isScanner = time - vm.lastInputTime <= 35 // 间隔小于100ms的就认为是扫描枪输入 整个过程大概会600ms 每隔20ms触发一次
        vm.lastInputTime = time
      } else {
        vm.lastInputTime = new Date().getTime()
      }
      let autoTime = new Date().getTime()
      if (autoTime - vm.lastInputTime > 35 && autoTime - vm.lastInputTime < vm.autoOperationWriteTime + 2000 + vm.autoOperationNextTime) {
        vm.isScanner = false
        return
      }
      //
      if (vm.scannerTimeout) {
        clearTimeout(vm.scannerTimeout)
        vm.scannerTimeout = undefined
      }

      vm.scannerTimeout = setTimeout(async function () {
        if (vm.isScanner) {
          console.log(vm.sn)
          // 判断是否是客户sn规则
          if (vm.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.CONTROLLER) {
            // 老控制器不带换行，新控制器sn带换行
            if (vm.sn.includes('\n')) {
              const array = vm.sn.split('\n')
              let _sn = ''
              let _snData = []

              // 电机控制器
              if (vm.sn.includes('M')) {
                // 客户sn
                if (vm.sn.includes('\/')) {
                  // 二维码解析 第一行数据（可能为客户sn）
                  vm.customer_sn = array[0].replace(/\s/g, '')
                  // 获取的sn数据，进行空行数据删除
                  const data = array.filter((res) => res !== '')

                  _snData = data.slice(1, array.length)
                } else {
                  _snData = array.filter((res) => res !== '')
                }

                _snData.forEach((item, index) => {
                  if (index == 0 || index == 2) {
                    _sn += item
                  }
                })
              } else {
                // 客户sn
                if (vm.sn.includes('\/')) {
                  // 二维码解析 第一行数据（可能为客户sn）
                  vm.customer_sn = array[0].replace(/\s/g, '')

                  // 获取的sn数据，进行空行数据删除
                  const data = array.filter((res) => res !== '')

                  _snData = data.slice(1, array.length)

                  if (data.length > 2) {
                    // 新sn
                    _snData.forEach((item, index) => {
                      _sn += index === 0 ? item.slice(0, item.length - 5) : item
                    })
                  } else {
                    // 老sn
                    _sn = _snData[0]
                  }
                } else {
                  _snData = array
                  _snData.forEach((item, index) => {
                    _sn += index === 0 ? item.slice(0, item.length - 5) : item
                  })
                }
              }

              vm.sn = _sn
            }
          } else if (vm.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.HMI) {
            if (vm.isCustomer0049) {
              // 如果是特殊客户
              if (vm.sn.includes('\n')) {
                const array = vm.sn.split('\n')
                let _sn = ''
                // 获取的sn数据，进行空行数据删除
                let _snData = array.filter((res) => res !== '')
                // 二维码解析 第一行数据为客户sn
                _sn = _snData[0].replace(/\s/g, '')
                vm.macHmi = _snData[1].replace(/\s/g, '')
                vm.sn = _sn
              }
            } else {
              // 是否带有客户sn
              if (vm.sn.includes('\/')) {
                if (vm.sn.includes('\n')) {
                  const array = vm.sn.split('\n')
                  // let _sn = ''
                  // 获取的sn数据，进行空行数据删除
                  let _snData = array.filter((res) => res !== '')
                  // 二维码解析 第一行数据（可能为客户sn）
                  vm.customer_sn = array[0].replace(/\s/g, '')
                  _snData = _snData.slice(1)

                  // 获取第一行的软件版本号
                  const version = _snData[0]
                  // 如果软件版本号和读取出来的软件版本号不匹配就弹窗提示
                  if (version !== vm.hmiAttrValues['soft_ver']) {
                    vm.sn = ''
                    vm.customer_sn = ''
                    clearTimeout(vm.scannerTimeout)
                    vm.scannerTimeout = undefined
                    vm.$message({
                      message: '软件版本号和读取出来的软件版本号不匹配',
                      type: 'error'
                    })
                    return
                  }
                  // 合并sn data
                  _snData = _snData.join('')

                  if (_snData.includes('DP')) {
                    let array = _snData.split('DP')
                    if (array.length > 1) {
                      vm.sn = ('DP' + array[array.length - 1]).replace(/\s+/g, '')
                    }
                  }

                  // if (_snData.length > 1) {
                  //   // 新
                  //   _snData.forEach((item, index) => {
                  //     _sn += index === 0 ? item.slice(0, item.length - 5) : item
                  //   })
                  // } else {
                  //   // 老
                  //   _sn = _snData[0]
                  // }
                  // vm.sn = _sn
                } else {
                  // 老
                  if (vm.sn.includes('DP')) {
                    let array = vm.sn.split('DP')
                    if (array.length > 1) {
                      vm.sn = ('DP' + array[array.length - 1]).replace(/\s+/g, '')
                    }
                  }
                }
              } else {
                // 非客户sn
                if (vm.sn.includes('\n')) {
                  const array = vm.sn.split('\n')
                  // 获取第一行的软件版本号
                  const version = array[0]
                  // 如果软件版本号和读取出来的软件版本号不匹配就弹窗提示
                  if (version !== vm.hmiAttrValues['soft_ver']) {
                    vm.sn = ''
                    vm.customer_sn = ''
                    clearTimeout(vm.scannerTimeout)
                    vm.scannerTimeout = undefined
                    vm.$message({
                      message: '软件版本号和读取出来的软件版本号不匹配',
                      type: 'error'
                    })
                    return
                  }

                  if (vm.sn.includes('DP')) {
                    const array = vm.sn.split('DP')
                    if (array.length > 1) {
                      vm.sn = ('DP' + array[array.length - 1]).replace(/\s+/g, '')
                    }
                  }

                  // 不再根据换行符来处理sn逻辑
                  //  const array = vm.sn.split('\n')
                  //  let _sn = ''
                  // 获取的sn数据，进行空行数据删除
                  // let _snData = array.filter((res) => res !== '')
                  // if (_snData.length > 3) {
                  //   // 老
                  //   if (vm.sn.includes('DP')) {
                  //     const array = vm.sn.split('DP')
                  //     if (array.length > 1) {
                  //       vm.sn = ('DP' + array[array.length - 1]).replace(/\s+/g, '')
                  //     }
                  //   }
                  // } else {
                  //   // 新
                  //   _snData.forEach((item, index) => {
                  //     _sn += index === 0 ? item.slice(0, item.length - 5) : item
                  //   })
                  //   vm.sn = _sn
                  // }
                } else {
                  // 老的不带换行符
                  if (vm.sn.includes('DP')) {
                    const array = vm.sn.split('DP')
                    if (array.length > 1) {
                      vm.sn = ('DP' + array[array.length - 1]).replace(/\s+/g, '')
                    }
                  }
                }
              }
            }
          } else if (vm.itemRoot === Core.Const.CATEGORY_ROOT_TYPE.SENSOR) {
            // 是否带有客户sn
            if (vm.sn.includes('\/')) {
              // 带客户sn
              // 新标带客户SN：出现三个换行符且带“/”
              const array = vm.sn.split('\n')
              let _sn = ''
              let _snData = []
              // 获取的sn数据，进行空行数据删除
              _snData = array.filter((res) => res !== '')

              if (vm.sn.includes('\n') && array.length >= 4) {
                // 二维码解析 第一行数据（可能为客户sn）
                vm.customer_sn = array[0].replace(/\s/g, '')

                _snData = _snData.slice(1)

                _snData.forEach((item, index) => {
                  if (index == 1) {
                    _sn += item.slice(0, 8)
                  } else {
                    _sn += item
                  }
                })
              } else if (array.length == 2) {
                // 老标带客户
                vm.customer_sn = array[0].replace(/\s/g, '')
                _sn = array[1].replace(/\s/g, '')
              }
              vm.sn = _sn
            } else {
              // 非客户sn
              // 传感器SN 如果出现两个换行符,扫描二维码后文本框显示：第一行+第二行前8个字符+第三行
              if (vm.sn.includes('\n') && vm.sn.split('\n').length >= 3) {
                const array = vm.sn.split('\n')
                let _sn = ''
                let _snData = []

                // 获取的sn数据，进行空行数据删除
                _snData = array.filter((res) => res !== '')

                _snData.forEach((item, index) => {
                  if (index == 1) {
                    _sn += item.slice(0, 8)
                  } else {
                    _sn += item
                  }
                })
                vm.sn = _sn
              } else if (vm.sn.includes('SR')) {
                const array = vm.sn.split('SR')
                if (array.length > 1) {
                  vm.sn = ('SR' + array[array.length - 1]).replace(/\s+/g, '')
                }
              }
            }
          }

          vm.sn = vm.sn.replace(/\s+/g, '')
          if (vm.sn.length === 15 && vm.sn.slice(0, 2) === '10') {
            const crcCheck = vm.sn.slice(-2)
            const crcStr = vm.sn.slice(0, -2)
            if (parseInt(Update.checkCrc8(crcStr), 16) === parseInt(crcCheck, 16)) {
              vm.snLength = 15
              vm.checkSNType = true
              // vm.writeSn()
            } else {
              clearTimeout(vm.scannerTimeout)
              vm.scannerTimeout = undefined
              vm.$message.error('CRC校验失败')
              return false
            }
          }

          // 输入框中SN长度判断，如果长度不一样不允许录入 并且清空SN（为了防止重复扫码出现的问题，
          // 重复扫码SN长度不同会报错）
          if (vm.sn.length !== vm.snLength) {
            vm.sn = ''
            vm.customer_sn = ''
            clearTimeout(vm.scannerTimeout)
            vm.scannerTimeout = undefined
            vm.$message.error('SN长度不符合,暂停录入')
            return
          }

          if (vm.showErrorCode) {
            // 读取Error code
            const isOK = await vm.readErrorCode()
            console.log('isOk:', isOK)
            if (!isOK) {
              vm.sn = ''
              vm.customer_sn = ''
              clearTimeout(vm.scannerTimeout)
              vm.scannerTimeout = undefined
              vm.$message.error('读取ErrorCode失败,暂停录入')
              return
            }
          }
          if (vm.autoOperation && [4, 7, 6].includes(vm.itemRoot)) {
            if (vm.isTechnicianUse) {
              vm.autonNextTimeout = setTimeout(function () {
                // console.log("next start",new Date().getTime());
                vm.next()
              }, vm.autoOperationNextTime)
            } else if (vm.itemRoot === 6 && !vm.isNewRegulationSEN) {
              // 如果是老规则的传感器
              vm.autonNextTimeout = setTimeout(function () {
                vm.next()
              }, vm.autoOperationNextTime)
            } else {
              if (!vm.sn) return
              vm.writeSn()
              vm.autoReadTimeout = setTimeout(function () {
                // console.log('read start', new Date().getTime())
                vm.readBase()
              }, vm.autoOperationWriteTime)
              vm.autonNextTimeout = setTimeout(function () {
                // console.log('next start', new Date().getTime())
                vm.next()
              }, vm.autoOperationWriteTime + vm.autoOperationNextTime)
            }
          }
          vm.isScanner = false
        }
      }, 800)
    },
    isConnected: function (newValue, oldValue) {
      let vm = this
      if (newValue != oldValue && oldValue == true) {
        let count = 0
        HMI.port.setConnection()
        HMI.port.setBoxOperation()
        if (false) {
        } else {
          if (vm.reconnectInterval) {
            clearInterval(vm.reconnectInterval)
            vm.reconnectInterval = ''
          }
          vm.reconnectInterval = setInterval(() => {
            count++
            if (count === 1) {
              vm.checkConnection()
            } else if (count > 1) {
              if (!vm.usbHID && vm.com) {
                clearInterval(vm.reconnectInterval)
                vm.init()
              }
              if (vm.usbHID) {
                clearInterval(vm.reconnectInterval)
                vm.init()
              }
              if (count > 3 && HMI.port.isConnected()) {
                console.log('Count stop', count)
                clearInterval(vm.reconnectInterval)
              }
            }
          }, 500)
        }
      }
    },
    // 监听是否有多个控制器
    isMoreController: function (newValue, oldValue) {
      if (newValue) {
        // 发现多个控制器后
        this.target = 0x0a
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.component-order-test-report {
  width: 100%;
  height: 100%;
  .content-wrap {
    padding: 0;
  }
  .header {
    line-height: 40px;
    height: 40px;
    padding: 0 38px;
    border-bottom: 1px solid #2b2f3b;

    .label {
      margin-left: 25px;
      font-size: 16px;
    }

    .add-btn {
      margin: 20px 0;
      float: right;
      background-color: #858890;
    }
  }

  .content-card-item {
    .save-btn {
      float: right;
      margin-top: 10px;
    }

    .content-header {
      display: block;
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
            /*float: left;*/
          }

          .el-select {
            /*float: left;*/
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
            float: left;
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

  table {
    border-collapse: collapse;
    border-color: rgba(255, 255, 255, 0.3);
    width: 100%;

    tr {
      td {
        width: 25%;
        text-align: center;
        height: 36px;
        line-height: 36px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;

        input {
          height: 34px;
          background: #2b2f3b;
          width: 100%;
          padding: 0 10px;
          color: #ffffff;
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

  .iot-input {
    resize: none;
    padding: 0 10px;
    line-height: 2;
    margin-left: 3px;
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

  .qr {
    width: 130px;
    height: 130px;
    padding: 5px;
    background: #fff;
  }
}
</style>



// WEBPACK FOOTER //
// test-report.vue?771d3748