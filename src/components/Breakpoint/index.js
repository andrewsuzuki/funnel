import PropTypes from 'prop-types'
import invariant from 'invariant'

import {
  styled,
  propTypeBreakpoint,
  propTypeBreakpointOrArrayOfBreakpoints,
} from '../../utils'


const specPropHandlers = {
  showAbove: () => null,
  showBelow: () => null,
  show: () => null,
  hideAbove: () => null,
  hideBelow: () => null,
  hide: () => null,
}


const validSpecProps = Object.keys(specPropHandlers)


const Breakpoint = styled.div(({ children, ...restProps }, t) => {
  const wheres = validSpecProps
  .map((type) => ({ type, where: restProps[type] }))
  .filter(({ where }) => where)

  invariant(
    wheres.length === 1,
    `Breakpoint must have exactly one breakpoint-specifying prop {${validSpecProps.join(',')}}`,
  )

  const { type, where } = wheres[0]

  const handler = specPropHandlers[type]

  return handler(t, where)
})

Breakpoint.propTypes = {
  children: PropTypes.node,

  showAbove: propTypeBreakpoint,
  showBelow: propTypeBreakpoint,
  show: propTypeBreakpointOrArrayOfBreakpoints,
  hideAbove: propTypeBreakpoint,
  hideBelow: propTypeBreakpoint,
  hide: propTypeBreakpointOrArrayOfBreakpoints,
}

export default Breakpoint
