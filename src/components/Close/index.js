import { styled, propTypeSize } from '../../utils'

import { square, borderRadiusIfEnabled } from '../../mixins'


const beforeAndAfterCommonStyles = {
  position: 'absolute',
  display: 'block',
  top: '50%',
  left: '50%',

  content: '""',
  transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
  transformOrigin: 'center center',
}


const sizeLookup = {
  small: '16px',
  normal: '20px',
  large: '32px',
}


const hoverStyles = { backgroundColor: 'rgba(10, 10, 10, 0.3)' }
const activeStyles = { backgroundColor: 'rgba(10, 10, 10, 0.4)' }


const Close = styled.button(({ size }, t) => {
  const sideLength = sizeLookup[size] || 0

  return {
    ...square(sideLength),
    outline: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
    borderWidth: 0,
    fontSize: '1rem',
    verticalAlign: 'top',
    backgroundColor: 'rgba(10, 10, 10, 0.2)',
    ...borderRadiusIfEnabled(t.borderRadiusInfinite),

    userSelect: 'none',
    appearance: 'none',

    // Cross-pieces
    ':before': {
      ...beforeAndAfterCommonStyles,
      backgroundColor: t.white,
      width: '50%',
      height: '2px',
    },
    ':after': {
      ...beforeAndAfterCommonStyles,
      backgroundColor: t.white,
      width: '2px',
      height: '50%',
    },

    ':hover': hoverStyles,
    ':focus': hoverStyles,
    ':active': activeStyles,
  }
})

Close.propTypes = {
  size: propTypeSize.isRequired, // has default
}

Close.defaultProps = {
  size: 'normal',
}

export default Close
