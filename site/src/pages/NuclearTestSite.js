import React from 'react'

import {
  H2,
  Tabs,
  Tab,
  Icon,
} from '../../../dist'


const NuclearTestSite = () =>
  <div>
    <H2>Nuclear Test Site</H2>
    <Tabs size="large" type="buttonlike">
      <Tab active><Icon name="github" />Github</Tab>
      <Tab><Icon name="facebook" />Facebook</Tab>
      <Tab><Icon name="instagram" />Instagram</Tab>
    </Tabs>
  </div>

export default NuclearTestSite
