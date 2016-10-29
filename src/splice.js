import { chars } from './chars'

export let splice = (str, start = 0, delCount, subStr) => {
  let arr = chars(str)
  if (!arr) {
    return ''
  }
  start = parseInt(start)
  delCount = parseInt(delCount)
  if (!delCount) {
    arr.splice(start)
  } else if (!subStr) {
    arr.splice(start, delCount)
  } else {
    arr.splice(start, delCount, subStr)
  }
  return arr.join('')
}
