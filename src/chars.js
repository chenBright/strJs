import { makeStr } from './helper/makeStr'

/**
 * 将字符串分割成数组，每一项为一个字符。
 * @module str/chars
 * @param  {String} str 需要分割的字符串
 * @return {Array}     分割后的数组
 * @example
 * str.chars('abc')   // ['a', 'b', 'c']
 *
 * str.chars(123)     // ['1', '2', '3']
 */
export let chars = str => makeStr(str).split('')
