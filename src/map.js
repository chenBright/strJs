import { makeStr } from './helper/makeStr'

/**
 * 将字符串的每个字符作为参数传入指定函数，并返回一个字符串。
 * @module str/map
 * @param  {String}   str 需处理的字符串
 * @param  {Function} fun 处理函数，调用时会传入三个参数：字符元素、字符的索引、字符调用split('')后的数组
 * @return {String}       处理后的字符串
 * @example
 * str.map('Hello world', val => val.toUpperCase())   // 'HELLO WORLD'
 * str.map('Hello world', '')                         // ''Hello world''
 * str.map('Hello world', undefined)                  // ''Hello world''
 */
export let map = (str, fun) => {
  let isNum = typeof str === 'number'
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  if (typeof fun !== 'function') {
    return str
  }
  let arr = str.split('')
  if (isNum) {
    arr = arr.map(val => +val)
  }
  return arr.map(fun).join('')
}
