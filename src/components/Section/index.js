import PropTypes from 'prop-types'

import { styled } from '../../utils'


const Section = styled.section((p, t) => ({
  width: '100%',
  paddingTop: '3rem',
  paddingBottom: '3rem',
  backgroundColor: t.sectionBackgroundColor,
}))

Section.propTypes = {
  children: PropTypes.node,
}

export default Section
