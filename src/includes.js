import {makeStr} from './helper/makeStr'

export let includes = (str, subStr) => {
  str = makeStr(str)
  subStr = makeStr(substr)
  if(str.length === 0 || subStr.length === 0) {
    return false
  }
  return !!(~str.indexOf(subStr))
}
