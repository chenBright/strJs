import { makeStr } from './helper/makeStr'

export let clean = str => {
  str = makeStr(str)
  let words = str.match(/\w+/g)
  if (words === null) {
    return ''
  }
  return words.join(' ')
}
