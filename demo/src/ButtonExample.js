import React from 'react'

import {
  Section,
  Container,
  Row,
  Column,
  H2,
  Button,
} from '../../dist'

const GridFormExample = () =>
  <Section>
    <Container>
      <Row>
        <Column tablet="one-half">
          <H2>Buttons</H2>
          <Button>Default button</Button>
        </Column>
      </Row>
    </Container>
  </Section>

export default GridFormExample
