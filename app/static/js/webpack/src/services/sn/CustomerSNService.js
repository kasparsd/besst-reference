/*
 * @Author: Bai YanShuo
 * @Date: 2022-06-15 11:22:15
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2022-08-25 17:52:30
 * @FilePath: /BESST/besst-client/src/services/sn/customerSNService.js
 * @Description:
 */
import Core from 'core/core'

function findCustomerSN(sn) {
  return Core.HttpHelp.request({
    method: 'GET',
    url: '/object/customerSn',
    data: {
      sn: sn
    }
  })
}

const CustomerSNService = {
  findCustomerSN
}

export default CustomerSNService



// WEBPACK FOOTER //
// ./src/services/sn/CustomerSNService.js