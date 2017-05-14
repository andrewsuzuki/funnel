import PropTypes from 'prop-types'

import { styled } from '../../utils'

import { padding } from '../../mixins'


const Section = styled.section((p, t) => ({
  width: '100%',
  ...padding('3rem', null),
  backgroundColor: t.sectionBackgroundColor,
}))

Section.propTypes = {
  children: PropTypes.node,
}

export default Section
