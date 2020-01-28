import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Table extends Component {

  static propTypes = {
    header: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
  }

  render () {
    const { header, data } = this.props

    return (
    <table className="table">
      <thead>
      <tr>
        {header.map((h, i) => {
          return (<th scope="col" key={i}>{h}</th>)
        })}
      </tr>
      </thead>
      <tbody>
      {data.map((obj, index) => {
        return <tr key={index}>
          {Object.keys(obj).map((t, k) => {
            return (<td key={k}>{obj[t]}</td>)
          })}
        </tr>
      })}
      </tbody>
    </table>
    )
  }
}

export default Table
