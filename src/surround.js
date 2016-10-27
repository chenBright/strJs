import { makeStr } from './helper/makeStr'

export let surround = (str, wrap) => {
  str = makeStr(str)
  wrap = makeStr(wrap)
  return wrap + str + wrap
}
