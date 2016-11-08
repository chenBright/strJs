import { makeStr } from './helper/makeStr'

export let chop = (str, step = str.length) => {
  str = makeStr(str)
  if (str === '') {
    return []
  }
  step = parseInt(step)
  let reg = new RegExp('\\w{1,' + step + '}', 'g')
  return str.match(reg)
}
