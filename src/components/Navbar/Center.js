import { styled } from '../../utils'

import { margin } from '../../mixins'


const Center = styled.div({
  flexGrow: 0,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  ...margin(null, 'auto'),
})

Center.propTypes = {
}

export default Center
