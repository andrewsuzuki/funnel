import PropTypes from 'prop-types'
import merge from 'lodash.merge'
import get from 'lodash.get'

import { styled, connectBackgroundContext, darken } from '../../utils'

import { hover } from '../../mixins'

import A from '../A'


const NavbarLink = styled(A)(({ active, tab, backgroundContext }, t) => {
  const isLight = get(backgroundContext, 'backgroundColorIsLight')

  const linkColor = isLight ? t.navbarLinkColor : t.white
  const linkColorHover = isLight ? t.navbarLinkColorHover : t.white

  return merge({
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
      borderTop: '1px solid transparent',
      borderBottom: '1px solid transparent',

      paddingTop: 'calc(0.75rem - 1px)',
      paddingRight: '1rem',
      paddingBottom: 'calc(0.75rem - 1px)',
      paddingLeft: '1rem',

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
  })
})

NavbarLink.propTypes = {
  active: PropTypes.bool,
  tab: PropTypes.bool,
  children: PropTypes.node,
}

export default connectBackgroundContext(NavbarLink)
