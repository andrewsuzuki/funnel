import React from 'react'

import {
  Tabs,
  Tab,
  Icon,
} from '../../../dist'

import PaginationDemo from '../components/PaginationDemo'


const NuclearTestSite = () =>
  <div>
    <Tabs size="large" type="buttonlike">
      <Tab active><Icon name="github" />Github</Tab>
      <Tab><Icon name="facebook" />Facebook</Tab>
      <Tab><Icon name="instagram" />Instagram</Tab>
    </Tabs>
    <PaginationDemo />
  </div>

export default NuclearTestSite
