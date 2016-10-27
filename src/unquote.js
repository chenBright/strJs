import { makeStr } from './helper/makeStr'

export let unquote = (str, quoteChar = '"') => {
  str = makeStr(str)
  quoteChar = makeStr(quoteChar)
  let firstQuoIndex = str.indexOf(quoteChar),
    lastQuoIndex = str.lastIndexOf(quoteChar)
  return str.slice(0, firstQuoIndex)
    + str.slice(firstQuoIndex + 1, lastQuoIndex)
    + str.slice(lastQuoIndex + 1)
}
