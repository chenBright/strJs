import { makeStr } from './makeStr'

export let adjacent = (str, direction) => {
  str = makeStr(str)
  if (str.length === 0) {
    return ''
  }
  let charCode = str.charCodeAt(0)
  return String.fromCharCode(charCode + direction)
}
