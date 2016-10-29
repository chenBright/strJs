import { searchStr } from './helper/searchStr'

export let strLeftBack = (str, pattern = '') => searchStr(str, pattern, 'left', true)
