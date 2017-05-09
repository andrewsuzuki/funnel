import { styled, expandStyles } from '../../utils'


const FieldHelp = styled.div(expandStyles(
  'mTop/~fieldHelpMarginTop',

  'fs/~fieldHelpFontSize',
  'c/~fieldHelpColor',
))

FieldHelp.propTypes = {
}

export default FieldHelp
