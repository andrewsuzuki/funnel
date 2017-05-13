import PropTypes from 'prop-types'

import { styled } from '../../utils'


const NavbarItem = styled.div({
  flexGrow: 0,
  flexShrink: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  paddingTop: '0.5rem',
  paddingRight: '0.75rem',
  paddingBottom: '0.5rem',
  paddingLeft: '0.75rem',

  fontSize: '1rem',
  lineHeight: 1.5,
})

NavbarItem.propTypes = {
  children: PropTypes.node,
}

export default NavbarItem
