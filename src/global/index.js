import { injectRuleMapGlobal } from '../utils'

import rulesReset from './rulesReset'
import rulesBase from './rulesBase'


export function injectReset() {
  injectRuleMapGlobal(rulesReset)
}


export function injectBase(theme) {
  injectRuleMapGlobal(rulesBase(theme))
}


export function injectAllGlobal(theme) {
  injectReset()
  injectBase(theme)
}
