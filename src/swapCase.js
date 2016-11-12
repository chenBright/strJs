import { makeStr } from './helper/makeStr'
import { chars } from './chars'

/**
 * 转换字符串中每个字母的大小写。
 * @module str/swapCase
 * @param  {String} str 需要转换大小写的字符串
 * @return {String}     已经转换大小写的字符串
 * @example
 * str.swapCase('AaBbCcDdEe')   // 'aAbBcCdDeE'
 * str.swapCase('Hello World')  // 'hELLO wORLD'
 */
export let swapCase = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  let lowerCaseReg = /[a-z]/,
    upperCaseReg = /[A-Z]/,
    strings = chars(str),
    swapCases = strings.map(function (val) {
      if (lowerCaseReg.test(val)) {
        return val.toUpperCase()
      } else if (upperCaseReg.test(val)) {
        return val.toLowerCase()
      }
      return val
    })
  return swapCases.join('')
}
