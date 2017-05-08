# otep

User interface library for React.

## Examples

### Hero

```javascript
import { Hero, HeroTitle, HeroSubtitle } from 'otep'

const Example = () =>
  <Hero>
    <HeroTitle>Welcome</HeroTitle>
    <HeroSubtitle>This is a welcome page.</HeroSubtitle>
  </Hero>
```

### Grid, Forms, and Tiles

```javascript
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

TODO

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
