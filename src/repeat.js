import { makeStr } from './helper/makeStr'

export let repeat = (str, count, separator = '') => {
  str = makeStr(str)
  count = +count
  if (str === '' || isNaN(count)) {
    return ''
  }
  if (separator === '') {
    return str.repeat(count)
  }
  let reStr = ''
  for (let i = count - 1; i >= 0; i -= 1) {
    reStr += str
    if (i !== 0) {
      reStr += separator
    }
  }
  return reStr
}
