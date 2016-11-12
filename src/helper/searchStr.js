import { makeStr } from './makeStr'

/**
* 从左边（右边）开始定位指定字符（串），并返回定位的字符串左边（右边）的字符串。
 * @method searchStr
 * @param  {String}  str                被操作的字符串
 * @param  {String}  [pattern='']       用于定位的字符
 * @param  {String}  [direction='left'] left，表示返回定位字符串左边的字符串；right，表示返回定位字符串右边的字符串
 * @param  {Boolean} [isBack=false]     false，表示从左边开始定位；true，表示从右边开始定位
 * @return {String}                     定位字符串左边（右边）的字符串
 */
export let searchStr = (str, pattern = '', direction = 'left', isBack = false) => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  pattern = makeStr(pattern)
  if (pattern === '') {
    return str
  }
  let index
  // 如果isBack为true，表示从右边开始定位
  // 如果isBack为false，表示从左边开始定位
  if (isBack) {
    index = str.lastIndexOf(pattern)
  } else {
    index = str.indexOf(pattern)
  }
  // 如果direction为left，表示返回定位字符串左边的字符串
  if (direction === 'left') {
    // 如果没有找到定位字符，则返回整个字符串
    if (index === -1) {
      index = str.length
    }
    return str.slice(0, index)
  }
  // 如果direction不为left，即为right，表示返回定位字符串右边的字符串
  // 如果没有找到定位字符，则返回整个字符串
  if (index === -1) {
    index = 0
  } else {
    index += pattern.length
  }
  return str.slice(index)
}
