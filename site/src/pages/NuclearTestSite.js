import React from 'react'

import {
  Tabs,
  Tab,
  Icon,
} from '../../../dist'

import PaginationDemo from '../components/PaginationDemo'
import NavbarDemo from '../components/NavbarDemo'


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
    <NavbarDemo />
  </div>

export default NuclearTestSite
