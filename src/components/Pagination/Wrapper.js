import { styled, propTypeSize } from '../../utils'

import { margin } from '../../mixins'


const sizeToThemeFontSizeMap = {
  normal: 'fontSizeNormal',
  small: 'fontSizeSmall',
  large: 'fontSizeLarge',
}

const Wrapper = styled.div(({ size }, t) => ({
  ...margin('-0.25rem'),

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // or space-between

  textAlign: 'center',

  // size
  fontSize: t[sizeToThemeFontSizeMap[size]],
}))

Wrapper.propTypes = {
  size: propTypeSize.isRequired, // has default
}

export default Wrapper
