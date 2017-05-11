![otep logo](/logo/logo.png?raw=true "otep")

User interface library for React.

## Examples

### Hero

```jsx
import { Hero, HeroTitle, HeroSubtitle } from 'otep'

const Example = () =>
  <Hero>
    <HeroTitle>Welcome</HeroTitle>
    <HeroSubtitle>This is a welcome page.</HeroSubtitle>
  </Hero>
```

### Grid, Forms, and Tiles

```jsx
import {
  Section,
  Container,
  Row,
  Column,
  H2,
  Field,
  Label,
  Control,
  RadioSet,
  Tile,
} from 'otep'

const Example = () =>
  <Section>
    <Container>
      <Row>
        <Column tablet="two-thirds">
          <H2>Contact</H2>
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
        <Column tablet="one-third">
          <Tile bold brand="primary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Tile>
        </Column>
      </Row>
    </Container>
  </Section>
```

## Installation

```
# Yarn
yarn add otep

# NPM
npm install --save otep
```

# Usage

1. Set up the `ThemeProvider` container near the top of your element tree, and provide it with a theme.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider, themes } from 'otep'

import App from './App'


const myTheme = {
  ...themes.standard,
  // extend the standard theme at will!
}


const Root = () =>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>


ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
```

2. Import components and use them!

```jsx
import React from 'react'

import {
  Section,
  Container,
  Row,
  Column,
  Button,
} from 'otep'


export default App = () =>
  <Section>
    <Container>
      <Row>
        <Column tablet="one-half">
          <Button>Click me</Button>
        </Column>
        <Column tablet="one-half">
          <Button>Click me too</Button>
        </Column>
      </Row>
    </Container>
  </Section>

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits

* Andrew Suzuki - @andrewsuzuki - [andrewsuzuki.com](http://andrewsuzuki.com)

## License

MIT
