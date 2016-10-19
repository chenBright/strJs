import {makeStr} from './helper/makeStr'

export let isBlank = str => {
  str = makeStr(str)
  return /^\s*$/.test(str)
}
