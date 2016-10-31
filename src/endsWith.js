import { makeStr } from './helper/makeStr'

export let endsWith = (str, subStr, start) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  if (!start) {
    start = str.length
  }
  return str.lastIndexOf(subStr, start) + subStr.length === start
}
