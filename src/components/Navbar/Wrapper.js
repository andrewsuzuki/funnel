import { styled } from '../../utils'

import BrandBackground from '../BrandBackground'


const Wrapper = styled(BrandBackground)((p, t) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'stretch',
  height: t.navbarHeight,
  textAlign: 'center',
  // backgroundColor: 'white',
  // zIndex: 10;
}))

Wrapper.propTypes = {
}

export default Wrapper
