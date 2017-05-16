import React from 'react'

import {
  Container,
  Row,
  Column,
  Button,
} from '../../../dist'


export default function ButtonDemo() {
  return (
    <Container fluid>
      <Row>
        <Column tablet="1"><strong>brand</strong></Column>
        <Column tablet="1"><strong>type</strong></Column>
        <Column tablet="1"><strong>state</strong></Column>
        <Column><strong>Example</strong></Column>
      </Row>
      {
        ['default', 'primary', 'success', 'info', 'warning', 'danger'].map((brand) =>
          [null, 'outlined', 'link'].map((type) =>
            [null, 'active', 'focus', 'disabled'].map((state) =>
              <Row>
                <Column tablet="1">{brand}</Column>
                <Column tablet="1">{type || 'normal'}</Column>
                <Column tablet="1">{state || 'none'}</Column>
                <Column>
                  <Button key={`button${brand}${type || 'normal'}${state || 'none'}`} brand={brand} {...type && { [type]: true }} {...state && { [state]: true }}>Click</Button>
                  <br /><br />
                </Column>
              </Row>)))
      }
    </Container>
  )
}
