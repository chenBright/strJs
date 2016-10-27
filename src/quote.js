import { makeStr } from './helper/makeStr'
import { surround } from './surround'

export let quote = (str, quoteChar = '"') => {
  return surround(str, quoteChar)
}
