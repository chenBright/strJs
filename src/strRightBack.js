import { searchStr } from './helper/searchStr'

export let strRightBack = (str, pattern = '') => searchStr(str, pattern, 'right', true)
