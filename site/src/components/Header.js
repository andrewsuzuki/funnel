import React from 'react'

import {
  Hero,
  AtTop,
  Navbar,
  NavbarLink,
  AtRight,
  HeroTitle,
  HeroSubtitle,
  Icon,
  A,
} from '../../../dist'


const AndrewGithubLinkIcon = () =>
  <A href="http://github.com/andrewsuzuki" title="@andrewsuzuki on GitHub" inheritColor>
    <Icon name="github" relative fixedWidth />
  </A>


const Header = () =>
  <Hero bold brand="primary">
    <AtTop>
      <Navbar brand="light">
        <AtRight>
          {['Home', 'About', 'Test'].map((n, i) =>
            <NavbarLink key={i} href="#" tab>{n}</NavbarLink>)}
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
