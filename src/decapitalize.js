import { makeStr } from './helper/makeStr'

/**
 * 将字符串的第一个字母转换成小写。
 * @module str/decapitalize
 * @param  {String}     str   需要转换的字符串
 * @return {String}           已转换的字符串
 * @example
 * str.decapitalize('StrJs')  // 'strJs'
 */
export let decapitalize = str => {
  str = makeStr(str)
  // 将第一个并且是大写的字母转换成小写
  let decapStr = str.replace(/^[A-Z]/, firstLetter => firstLetter.toLowerCase())
  return decapStr
}
