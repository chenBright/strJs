import { makeStr } from './helper/makeStr'

export let join = (separator, ...strings) => {
  return strings.join(makeStr(separator))
}
