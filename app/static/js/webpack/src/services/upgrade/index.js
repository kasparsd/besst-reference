/*
 * @Author: Bai YanShuo
 * @Date: 2024-07-25 13:30:44
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2024-07-25 13:39:14
 * @FilePath: /BESST/besst-client/src/services/upgrade/index.js
 * @Description:
 */

import Core from 'core/core'

function saveUpgradeRecord(data) {
  return Core.HttpHelp.request({
    method: 'POST',
    url: `/poObjectUpgradeRecord`,
    data: data
  })
}

const UpgradeService = {
  saveUpgradeRecord
}

export default UpgradeService



// WEBPACK FOOTER //
// ./src/services/upgrade/index.js