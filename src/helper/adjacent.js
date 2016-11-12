import { makeStr } from './makeStr'

/**
 * 获取相邻的字符
 * @method adjacent
 * @param  {String} str         字符
 * @param  {Number} direction   1，表示后一个字符；-1表示前一个字符
 * @return {String}             相邻的字符
 */
export let adjacent = (str, direction) => {
  str = makeStr(str)
  if (str.length === 0) {
    return ''
  }
  let charCode = str.charCodeAt(0)
  return String.fromCharCode(charCode + direction)
}
