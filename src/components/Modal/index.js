import React from 'react'
import PropTypes from 'prop-types'

import { styled, modalCloseClassname } from '../../utils'

import { breakpoint } from '../../mixins'

import Close from './Close'


const Container = styled.div((p, t) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden',
  overflowY: 'hidden',
  zIndex: t.zIndices.modal,
  backgroundColor: t.modalBackgroundColor,

  ...breakpoint('tablet', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
}))


export default class Modal extends React.PureComponent {
  onClick = (e) => {
    if (e.target.className.includes(modalCloseClassname)) {
      this.props.onClose(e)
    }
  }

  render() {
    const { children, onClose } = this.props

    return (
      <Container className={modalCloseClassname} onClick={this.onClick}>
        {onClose && <Close onClick={onClose} />}
        {children}
      </Container>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
}
