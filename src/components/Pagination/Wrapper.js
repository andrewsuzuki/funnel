import { styled, propTypeSize, propTypeBreakpoint } from '../../utils'

import { margin, breakpointTo } from '../../mixins'


const sizeToThemeFontSizeMap = {
  normal: 'fontSizeNormal',
  small: 'fontSizeSmall',
  large: 'fontSizeLarge',
}

const Wrapper = styled.div(({ size, breakAt }, t) => ({
  ...margin('-0.25rem'),

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // or space-between

  textAlign: 'center',

  // size
  fontSize: t[sizeToThemeFontSizeMap[size]],

  ...breakpointTo(t, breakAt, {
    flexWrap: 'wrap',
  }),
}))

Wrapper.propTypes = {
  size: propTypeSize.isRequired,
  breakAt: propTypeBreakpoint.isRequired,
}

export default Wrapper
