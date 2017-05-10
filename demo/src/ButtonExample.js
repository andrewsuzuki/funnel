import React from 'react'

import {
  Section,
  Container,
  Row,
  Column,
  H2,
  Button,
  Icon,
} from '../../dist'

const GridFormExample = () =>
  <Section>
    <Container>
      <Row>
        <Column tablet="one-half">
          <H2>Buttons</H2>
          <Button>Default button</Button>
          <Icon name="github" />
        </Column>
      </Row>
    </Container>
  </Section>

export default GridFormExample
