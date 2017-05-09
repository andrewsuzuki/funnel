import { capitalize } from '../../utils'

import { borderRadiusIfEnabled } from '../../mixins'


export default (t, size) => {
  const sizeCap = capitalize(size)

  return {
    fontSize: t[`buttonFontSize${sizeCap}`],
    ...borderRadiusIfEnabled(t, t[`buttonBorderRadius${sizeCap}`]),
  }
}
