/*
 * @Author: Bai YanShuo
 * @Date: 2022-06-15 11:22:15
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2022-10-26 18:28:21
 * @FilePath: /BESST/besst-client/src/services/error/index.js
 * @Description:
 */
import Core from 'core/core'

function findAllGroupByCode() {
  return Core.HttpHelp.request({
    method: 'GET',
    url: `/componentError/findAllGroupByCode`
  })
}
function saveErrorMessage(data) {
  return Core.HttpHelp.request({
    method: 'POST',
    url: `/componentError`,
    data: data
  })
}

function deleteErrorMessage(ids) {
  return Core.HttpHelp.request({
    method: 'DELETE',
    url: `/componentError`,
    params: {
      ids: ids
    }
  })
}

const ErrorService = {
  saveErrorMessage,
  findAllGroupByCode,
  deleteErrorMessage
}

export default ErrorService



// WEBPACK FOOTER //
// ./src/services/error/index.js