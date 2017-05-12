import React from 'react'

import {
  Section,
  Container,
  Row,
  Column,
} from '../../../dist'


const Footer = () =>
  <Section>
    <Container>
      <Row>
        <Column tablet="full-width">
          &copy;2017 Andrew Suzuki
        </Column>
      </Row>
    </Container>
  </Section>

export default Footer
