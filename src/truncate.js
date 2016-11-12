import { makeStr } from './helper/makeStr'

/**
 * 将字符串截断，并在尾部加上特定字符串。
 * @module str/truncate
 * @param  {String} str                 需要截断的字符串
 * @param  {String} length              截断后的字符串长度
 * @param  {String} [truncateStr='...'] 在尾部加上的特定字符串
 * @return {String}                     截断后的字符串
 * @example
 * str.truncate('Hello world', 6, 'bad boy')    // 'Hello bad boy'
 * str.truncate('Hello world', 5)               // 'Hello...'
 * str.truncate('Hello world', 15)              // 'Hello world'
 */
export let truncate = (str, length, truncateStr = '...') => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  length = parseInt(length)
  return str.length > length ? str.slice(0, length) + truncateStr : str
}
