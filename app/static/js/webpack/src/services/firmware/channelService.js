/*
 * @Author: Bai YanShuo
 * @Date: 2022-06-15 11:22:15
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2023-03-31 15:59:01
 * @FilePath: /BESST/besst-client/src/services/firmware/channelService.js
 * @Description:
 */
import Core from 'core/core'

function uploadFirmware(data) {
  return Core.HttpHelp.request({
    method: 'POST',
    url: '/sys/firmware/bulk',
    data: data
  })
}

function firmware(data) {
  return Core.HttpHelp.request({
    method: 'GET',
    url: '/sys/firmware/filter',
    data: data
  })
}

function deleteFirmware(ids) {
  return Core.HttpHelp.request({
    method: 'DELETE',
    url: '/sys/firmware',
    params: {
      ids: ids
    }
  })
}

function saveFirmware(data) {
  return Core.HttpHelp.request({
    method: 'POST',
    url: '/sys/firmware',
    data: data
  })
}

function channle(data, channelIdx) {
  return Core.HttpHelp.request({
    method: 'GET',
    url: `/firmware/channel/channel${channelIdx}`,
    data: data
  })
}

function channelStep(data) {
  return Core.HttpHelp.request({
    method: 'POST',
    url: '/firmware/channel/channelStep2',
    data: data
  })
}

function findHV() {
  return Core.HttpHelp.request({
    method: 'GET',
    url: '/firmware/channel/hardware/version'
  })
}

function upgradeList(data) {
  return Core.HttpHelp.request({
    method: 'GET',
    url: '/firmware/upgrade/list',
    data
  })
}

function articleHsHistory(data) {
  return Core.HttpHelp.request({
    method: 'POST',
    url: '/articleHsHistory',
    data: data
  })
}

const ChannelService = {
  firmware,
  saveFirmware,
  uploadFirmware,
  channle,
  channelStep,
  findHV,
  upgradeList,
  articleHsHistory,
  deleteFirmware
}

export default ChannelService



// WEBPACK FOOTER //
// ./src/services/firmware/channelService.js