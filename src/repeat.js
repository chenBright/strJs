import { makeStr } from './helper/makeStr'

export let repeat = (str, count = 0, separator = '') => {
  str = makeStr(str)
  if (str === '' || count == 0) {
    return ''
  }
  let repeatStr = str
  for (let i = 1; i <= count - 1; i += 1) {
    repeatStr += separator + str
  }
  return repeatStr
}
