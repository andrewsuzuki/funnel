import PropTypes from 'prop-types'

import { styled } from '../../utils'

import { square } from '../../mixins'

import VanillaClose from '../Close'


const Close = styled(VanillaClose)((p, t) => ({
  ...square('30px'),
  position: 'fixed',
  backgroundColor: 'transparent',
  top: '17px',
  right: '17px',
  cursor: 'pointer',
  zIndex: t.zIndices.modalClose,
}))

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Close
