/**
 * 将传入的参数转换成字符串。
 * @method makeStr
 * @param  {any} str 需要转换的值
 * @return {String}  转换后的字符串
 */
export let makeStr = str => {
  // 如果str为undefined或者null，则返回空字符串
  if (str == null) {
    return ''
  }
  return str + ''
}
