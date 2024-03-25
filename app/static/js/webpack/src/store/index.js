import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})

const store = new Vuex.Store({
  modules,
  state: {
    currentCategory: 0,
    changeFilter: {},
    currentBackStatus: false,
    userPermissions: [],
    userAuth: [],
    userAccount: ''
  },
  mutations: {
    currentCategory(state, payload) {
      state.currentCategory = payload.category
    },
    setChangeFilter(state, changeFilter) {
      state.changeFilter = changeFilter
    },
    changeTrueStatus(state) {
      state.currentBackStatus = true
    },
    changeFalseStatus(state) {
      state.currentBackStatus = false
    },
    currentAuth(state, payload) {
      state.userAuth = payload
    },
    userAccount(state, payload) {
      state.userAccount = payload
    },
    //更新权限
    changePermissions(state, data) {
      state.userPermissions = data
    }
  },
  actions: {
    // 获取权限列表
    getPermission({ commit }) {
      // return new Promise((resolve, reject) => {
      //     WarehouseService.getAllPermission().then((res) => {
      //         // 存储权限列表
      //         console.log(res);
      //         if(res.data.length > 0){
      //             let userPermissions = res.data;
      //             commit('changePermissions', userPermissions);
      //             resolve(userPermissions)
      //         }
      //
      //     }).catch(() => {
      //         reject()
      //     })
      // })
    }
  }
})

export default store



// WEBPACK FOOTER //
// ./src/store/index.js