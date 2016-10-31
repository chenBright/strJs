import { makeStr } from './helper/makeStr'

export let include = (str, subStr) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  return !!(~str.indexOf(subStr))
}
