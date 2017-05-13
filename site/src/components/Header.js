import React from 'react'

import {
  Hero,
  AtTop,
  Navbar,
  NavbarItem,
  AtLeft,
  AtRight,
  HeroTitle,
  HeroSubtitle,
  Icon,
  A,
} from '../../../dist'


const AndrewGithubLinkIcon = () =>
  <A href="http://github.com/andrewsuzuki" title="@andrewsuzuki on GitHub" inherit>
    <Icon name="github" relative fixedWidth />
  </A>


const Header = () =>
  <Hero bold brand="primary">
    <AtTop>
      <Navbar>
        <AtLeft>
          <NavbarItem>left</NavbarItem>
        </AtLeft>
        <AtRight>
          <NavbarItem>right</NavbarItem>
        </AtRight>
      </Navbar>
    </AtTop>
    <HeroTitle>otep</HeroTitle>
    <HeroSubtitle>
      A React UI library by Andrew Suzuki
      <AndrewGithubLinkIcon />
    </HeroSubtitle>
  </Hero>

export default Header
