import { makeStr } from './helper/makeStr'

/**
 * 将字符串分割成数组，数组每一项包含step个字符。最后一项的字符个数可以小于step。
 * @module str/chop
 * @param  {String} str                  需要分割的字符串
 * @param  {String} [step=str.length]    数组每一项的字符个数
 * @return {Array}                       分割后的数组
 * @example
 * str.chop('whitespace')     // ['whitespace']
 * str.chop('whitespace', 2)  // ['wh', 'it', 'es', 'pa', 'ce']
 * str.chop('whitespace', 3)  // ['whi', 'tes', 'pac', 'e']
 *
 * str.chop(12345, 1)         // ['1', '2', '3', '4', '5']
 */
export let chop = (str, step = str.length) => {
  str = makeStr(str)
  if (str === '') {
    return []
  }
  step = parseInt(step)
  let reg = new RegExp('\\w{1,' + step + '}', 'g')
  return str.match(reg)
}
