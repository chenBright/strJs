import { makeStr } from './helper/makeStr'

/**
 * 将字符串第一个字母转换成大写。当lowercaseRest为true时，将除了第一个字母之外的其他字母转换成小写
 * @method capitalize
 * @param  {String}   str                   [需要转换的字符串]
 * @param  {Boolean}  [lowercaseRest=false] [是否将除了第一个字母之外的其他字母转换成小写]
 * @return {String}                         [已转换的字符串]
 */
export let capitalize = (str, lowercaseRest = false) => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  // 获取除了第一个字母之外的其他字母
  let rest = str.slice(1)
  rest = lowercaseRest ? rest.toLowerCase() : rest
  return str.charAt(0).toUpperCase() + rest
}
