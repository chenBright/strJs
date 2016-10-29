import { searchStr } from './helper/searchStr'

export let strRight = (str, pattern = '') => searchStr(str, pattern, 'right', false)
