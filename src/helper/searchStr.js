import { makeStr } from './makeStr'

export let searchStr = (str, pattern = '', direction = 'left', isBack = false) => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  pattern = makeStr(pattern)
  if (pattern === '') {
    return str
  }
  let index
  if (isBack) {
    index = str.lastIndexOf(pattern)
  } else {
    index = str.indexOf(pattern)
  }
  if (direction === 'left') {
    if (index === -1) {
      index = str.length
    }
    return str.slice(0, index)
  }

  if (index === -1) {
    index = 0
  } else {
    index += pattern.length
  }
  return str.slice(index)
}
