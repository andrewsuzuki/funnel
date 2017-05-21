import PropTypes from 'prop-types'
import merge from 'lodash.merge'
import get from 'lodash.get'

import { styled, connectBackgroundContext } from '../../utils'

import { hover, padding, borderWidth, borderStyle, borderColor } from '../../mixins'

import A from '../A'

import navbarItemStyles from '../NavbarItem/navbarItemStyles'


const NavbarLink = styled(A)(({ active, tab, backgroundContext }, t) => {
  const linkColor = get(backgroundContext, 'linkColor', t.navbarLinkColor)
  const linkColorHover = linkColor

  return merge(
    {},
    navbarItemStyles,
    {
      color: linkColor,

      ...hover({
        color: linkColorHover,
      }),

      ...active && {
        color: linkColorHover,
      },
    }, {
      // Tab styles

      ...tab && {
        ...borderWidth('1px', null),
        ...borderStyle('solid', null),
        ...borderColor('transparent', null),

        ...padding('calc(0.75rem - 1px)', '1rem'),

        ...hover({
          textDecoration: 'none',
          borderBottomColor: linkColor,
        }),

        ...active && {
          color: linkColor,
          borderBottomColor: linkColor,
          borderBottomWidth: '3px',
          borderBottomStyle: 'solid',

          paddingBottom: 'calc(0.75rem - 3px)',
        },
      },
    },
  )
})

NavbarLink.propTypes = {
  active: PropTypes.bool,
  tab: PropTypes.bool,
  children: PropTypes.node,
  // ... other A (link) component styles
}

export default connectBackgroundContext(NavbarLink)
