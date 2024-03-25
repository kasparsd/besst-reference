const state = {
  currentChannel: 0,
  currentStep: 1,
  cmpName: 'Step1',
  steps: [
    [
      {
        name: '订单',
        cmpName: 'Order'
      },
      {
        name: '软硬件版本',
        cmpName: 'TransferStation'
      },
      {
        name: '固件上传',
        cmpName: 'Upload'
      }
    ],
    [
      {
        name: '物料',
        cmpName: 'Material'
      },
      {
        name: '软硬件版本',
        cmpName: 'TransferStation'
      },
      {
        name: '固件上传',
        cmpName: 'Upload'
      }
    ],
    [
      {
        name: 'SN',
        cmpName: 'SN'
      },
      {
        name: '软硬件版本',
        cmpName: 'TransferStation'
      },
      {
        name: '固件上传',
        cmpName: 'Upload'
      }
    ],
    [
      {
        name: '软硬件版本',
        cmpName: 'SoftHardware'
      },
      {
        name: '固件上传',
        cmpName: 'Upload'
      }
    ]
  ],
  currentSteps: [],
  transferStationData: [],
  uploadData: []
}

const mutations = {
  SET_CHANNEL: (state, payload) => {
    state.currentChannel = payload
  },
  CHANGE_STEP: (state, index) => {
    state.currentStep = index
    state.currentSteps = state.steps[state.currentChannel]
    state.cmpName = state.currentSteps[index - 1].cmpName
  },
  SET_TRANSFER_STATION_DATA: (state, data) => {
    state.transferStationData = data
  },
  SET_UPLOAD_DATA: (state, data) => {
    state.uploadData = data
  }
}
const actions = {
  setChannel({ commit }, channel) {
    commit('SET_CHANNEL', channel)
    commit('CHANGE_STEP', 1)
    commit('SET_TRANSFER_STATION_DATA', [])
    commit('SET_UPLOAD_DATA', [])
  },
  changeStep({ commit }, index) {
    commit('CHANGE_STEP', index)
  },
  setTransferStationData({ commit }, data) {
    commit('SET_TRANSFER_STATION_DATA', data)
  },
  setUploadData({ commit }, data) {
    commit('SET_UPLOAD_DATA', data)
  },
  next({ commit, state }) {
    commit('CHANGE_STEP', state.currentStep + 1)
  },
  prev({ commit, state }) {
    commit('CHANGE_STEP', state.currentStep - 1)
  }
}
const getters = {}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}



// WEBPACK FOOTER //
// ./src/store/modules/firmware.js