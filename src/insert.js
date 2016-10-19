import {makeStr} from './helper/makeStr'
import {chars} from './chars'

export let insert = (str, index, subStr) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  let arr = chars(str)
  arr.splice(index, 0, subStr)
  return arr.join('')
}
