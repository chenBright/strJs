import { makeStr } from './helper/makeStr'

export let truncate = (str, length, truncateStr = '...') => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  length = parseInt(length)
  return str.length > length ? str.slice(0, length) + truncateStr : str
}
