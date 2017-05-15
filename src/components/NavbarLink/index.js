import PropTypes from 'prop-types'
import merge from 'lodash.merge'
import get from 'lodash.get'

import { styled, connectBackgroundContext } from '../../utils'

import { hover, padding, borderWidth, borderStyle, borderColor } from '../../mixins'

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

    ...padding('0.5rem', '0.75rem'),

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
  })
})

NavbarLink.propTypes = {
  active: PropTypes.bool,
  tab: PropTypes.bool,
  children: PropTypes.node,
}

export default connectBackgroundContext(NavbarLink)
