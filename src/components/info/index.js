import React from 'react'
import { connect } from 'react-redux'

const Info = ({ values }) => (
  <div>
    {values.map((value, index) => (
      <div key={index}> item {index + 1}: {value} </div>
    ))}
  </div>
)

export default connect(state => ({ values: state }))(Info)
