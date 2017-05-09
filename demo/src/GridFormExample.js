import React from 'react'

import {
  Section,
  Container,
  Row,
  Column,
  H2,
  Field,
  Label,
  Control,
  TextInput,
  RadioSet,
  Tile,
  A,
} from '../../dist'

const GridFormExample = () =>
  <Section>
    <Container>
      <Row>
        <Column tablet="one-half">
          <H2>Contact</H2>
          <Field horizontal size="large">
            <Label>Full name</Label>
            <Control>
              <TextInput connectRootId />
            </Control>
          </Field>
          <Field horizontal>
            <Label>Choose one</Label>
            <Control>
              <RadioSet
                items={[
                  { label: 'Foo', value: 'foo' },
                  { label: 'Bar', value: 'bar' },
                  { label: 'Baz', value: 'baz' },
                ]}
              />
            </Control>
          </Field>
        </Column>
        <Column tablet="one-half">
          <Tile bold brand="success">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Tile>
          <A href="#">This is a link.</A>
        </Column>
      </Row>
    </Container>
  </Section>

export default GridFormExample
