import { injectRuleMapGlobal } from '../utils'

import rulesReset from './rulesReset'


export function injectReset() {
  injectRuleMapGlobal(rulesReset)
}

export function injectAllGlobal() {
  injectReset()
}
