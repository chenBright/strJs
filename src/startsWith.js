import { makeStr } from './helper/makeStr'

export let startsWith = (str, subStr, start = 0) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  return str.indexOf(subStr) === start
}
