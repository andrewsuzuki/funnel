import React from 'react'
import PropTypes from 'prop-types'

import { styled, modalCloseClassname as mcc } from '../../utils'

import { breakpoint } from '../../mixins'

import Container from '../Container'
import Row from '../Row'
import Column from '../Column'
import Box from '../Box'


const Fence = styled.div((p, t) => ({
  position: 'relative',
  marginTop: '60px',
  marginRight: '20px',
  marginBottom: '30px',
  marginLeft: '20px',
  maxHeight: 'calc(100vh - 90px)',
  width: 'calc(100vw - 40px)',
  overflowY: 'auto',
  overflowX: 'auto',

  ...breakpoint(t, 'tablet', {
    marginTop: '30px',
    maxHeight: 'calc(100vh - 60px)',
  }),
}))


export default function ModalContent({ column, boxed, children }) {
  const childrenFinal = React.createElement(boxed ? Box : 'div', null, children)

  return (
    <Fence className={mcc}>
      <Container className={mcc} fluid>
        <Row className={mcc} tablet="justify-content:center">
          <Column className={mcc} tablet={column}>
            {childrenFinal}
          </Column>
        </Row>
      </Container>
    </Fence>
  )
}

ModalContent.propTypes = {
  column: PropTypes.string.isRequired, // has default
  boxed: PropTypes.bool,

  children: PropTypes.node,
}

ModalContent.defaultProps = {
  column: '4',
}
