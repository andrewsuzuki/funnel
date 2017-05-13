import React from 'react'
import PropTypes from 'prop-types'

import {
  Section,
  Container,
} from '../../../dist'


const Content = ({ children }) =>
  <Section>
    <Container>
      {children}
    </Container>
  </Section>

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
