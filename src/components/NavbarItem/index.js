import PropTypes from 'prop-types'

import { styled } from '../../utils'

import navbarItemStyles from './navbarItemStyles'


const NavbarItem = styled.div(navbarItemStyles)

NavbarItem.propTypes = {
  children: PropTypes.node,
}

export default NavbarItem
