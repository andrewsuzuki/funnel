import React from 'react'

import {
  styled,
  Section,
  Container,
  Row,
  Column,
} from '../../../dist'


const Wrapper = styled(Section)({
  marginTop: '20px',
})


const year = (new Date()).getFullYear()


const Footer = () =>
  <Wrapper>
    <Container>
      <Row>
        <Column tablet="full-width">
          &copy;{year} Andrew Suzuki
        </Column>
      </Row>
    </Container>
  </Wrapper>

export default Footer
