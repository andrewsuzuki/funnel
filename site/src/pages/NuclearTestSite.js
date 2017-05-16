import React from 'react'

import {
  Tabs,
  Tab,
  Icon,
} from '../../../dist'

import PaginationDemo from '../components/PaginationDemo'
import ButtonDemo from '../components/ButtonDemo'


const NuclearTestSite = () =>
  <div>
    <Tabs size="large" type="buttonlike">
      <Tab active><Icon name="github" />Github</Tab>
      <Tab><Icon name="facebook" />Facebook</Tab>
      <Tab><Icon name="instagram" />Instagram</Tab>
    </Tabs>
    <hr />
    <PaginationDemo />
    <hr />
    <ButtonDemo />
  </div>

export default NuclearTestSite
