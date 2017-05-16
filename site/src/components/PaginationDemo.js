import React from 'react'

import {
  Field,
  Label,
  Control,
  NumberInput,
  Pagination,
} from '../../../dist'


export default class PaginationDemo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 1,
      current: 1,
      delta: 1,
    }
  }

  render() {
    return (
      <div>
        <Field horizontal>
          <Label>Total</Label>
          <Control>
            <NumberInput
              min="0"
              value={this.state.total}
              onChange={(e) => { this.setState({ total: parseInt(e.target.value, 10) }) }}
            />
          </Control>
        </Field>
        <Field horizontal>
          <Label>Current</Label>
          <Control>
            <NumberInput
              min="0"
              value={this.state.current}
              onChange={(e) => { this.setState({ current: parseInt(e.target.value, 10) }) }}
            />
          </Control>
        </Field>
        <Field horizontal>
          <Label>Delta</Label>
          <Control>
            <NumberInput
              min="0"
              value={this.state.delta}
              onChange={(e) => { this.setState({ delta: parseInt(e.target.value, 10) }) }}
            />
          </Control>
        </Field>
        <Pagination
          {...this.state}
          onPageClick={(pageNumber) => { this.setState({ current: pageNumber }) }}
        />
      </div>
    )
  }
}
