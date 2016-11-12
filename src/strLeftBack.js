import { searchStr } from './helper/searchStr'

/**
 * 从右边开始定位指定字符（串），并返回定位的字符串左边的字符串。
 * @module str/strLeftBack
 * @param  {String} str          被操作的字符串
 * @param  {String} [pattern=''] 用于定位的字符串
 * @return {String}              定位字符串左边的字符串
 * @example
 * str.strLeftBack('This_is_a_test_string', '_')    // 'This_is_a_test'
 * str.strLeftBack('This_is_a_test_string', 'This') // ''
 * str.strLeftBack('This_is_a_test_string')         // 'This_is_a_test_string'
 * str.strLeftBack('This_is_a_test_string', '-')    // 'This_is_a_test_string'
 */
export let strLeftBack = (str, pattern = '') => searchStr(str, pattern, 'left', true)
