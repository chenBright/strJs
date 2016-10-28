import { makeStr } from './helper/makeStr'

export let map = (str, fun = '') => {
  let isNum = typeof str === 'number'
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  if (typeof fun !== 'function') {
    return str
  }
  let arr = str.split('')
  if (isNum) {
    arr = arr.map(val => +val)
  }
  return arr.map(fun).join('')
}
