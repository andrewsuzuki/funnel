import React from 'react'

import {
  Hero,
  HeroTitle,
  HeroSubtitle,
  Icon,
  A,
} from '../../dist'

const HeroExample = () =>
  <Hero bold brand="primary">
    <HeroTitle>otep</HeroTitle>
    <HeroSubtitle>
      A React UI library by Andrew Suzuki
      <A href="http://github.com/andrewsuzuki" title="@andrewsuzuki on GitHub">
        <Icon name="github" relative fixedWidth />
      </A>
    </HeroSubtitle>
  </Hero>


export default HeroExample
