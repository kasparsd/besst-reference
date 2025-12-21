/*
 * @Author: Bai YanShuo
 * @Date: 2024-10-25 10:47:17
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2024-10-25 13:39:58
 * @FilePath: /BESST/besst-client/src/utils/conversion.js
 * @Description:用于数据转换
 */

/**
 *  将16进制字符串转换为二进制数组
 * @param {String} byteStr 16进制字符串
 * @param {Number} length 二进制数组长度 默认为8
 * @returns {Array} 二进制数组
 * @example
 * hexStringToBinaryArray('ff', 8) => [1,1,1,1,1,1,1,1]
 * */
function hexStringToBinaryArray(byteStr, length = 8) {
  let byteData = parseInt(byteStr, 16).toString(2).padStart(length, '0')
  let byteDataArray = byteData
    .split('')
    .map((item) => parseInt(item))
    .reverse()
  return byteDataArray
}

/**
 * 将16进制字符串转换为10进制数字(高低位调换)
 * @param {String} byteStr 16进制字符串
 * @param {Number} length 小数位数 默认为0
 * @returns {Number} 10进制数字
 * @example
 * hexStringToDecimal('100e', 2) => 36
 */
function hexStringToDecimal(byteStr, length = 0) {
  let byteData = parseInt(byteStr, 16)
  // 字节翻转 0x100e => 0xe10
  let byteDataArray = byteData.toString(16).match(/.{2}/g).reverse().join('')
  let data = parseInt(byteDataArray, 16)
  if (length) {
    data = data / Math.pow(10, length)
  }
  return data
}

const conversion = {
  hexStringToBinaryArray,
  hexStringToDecimal
}

export default conversion



// WEBPACK FOOTER //
// ./src/utils/conversion.js