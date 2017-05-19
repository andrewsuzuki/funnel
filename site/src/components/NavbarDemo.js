import React from 'react'

import {
  Container,
  Navbar,
  NavbarItem,
  NavbarLink,
  AtLeft,
  AtRight,
  AtCenter,
} from '../../../dist'


export default function NavbarDemo() {
  return (
    <Container fluid>
      <Navbar brand="light">
        <AtLeft>
          <NavbarItem>Hallo</NavbarItem>
          <NavbarItem>Hallo</NavbarItem>
          <NavbarItem>Hallo</NavbarItem>
        </AtLeft>
        <AtRight>
          Right
        </AtRight>
        <AtCenter>
          <NavbarLink href="#">Hallo</NavbarLink>
        </AtCenter>
      </Navbar>
    </Container>
  )
}
