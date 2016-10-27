import { makeStr } from './helper/makeStr'

export let includes = (str, subStr) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  return str.includes(subStr)
}
