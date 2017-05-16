import React from 'react'
import range from 'lodash.range'

import {
  Tabs,
  Tab,
  Icon,
  Pagination,
} from '../../../dist'


const NuclearTestSite = () =>
  <div>
    <Tabs size="large" type="buttonlike">
      <Tab active><Icon name="github" />Github</Tab>
      <Tab><Icon name="facebook" />Facebook</Tab>
      <Tab><Icon name="instagram" />Instagram</Tab>
    </Tabs>
    {range(1, 10).map((total) =>
      range(1, 10).map((current) =>
        range(1, 4).map((delta) =>
          current <= total &&
            <div key={`${total}|${current}|${delta}`}>
              <h6>{current}/{total}, delta {delta}</h6>
              <Pagination
                onPageClick={() => null}
                total={total}
                current={current}
                delta={delta}
              />
            </div>)))}
  </div>

export default NuclearTestSite
