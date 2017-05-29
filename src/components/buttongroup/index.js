import React from 'react'
import { connect } from 'react-redux'
import { range } from './../../utils'
// import styles from './style.css'

const ButtonGroup = ({ max, activeValue, onClick }) => (
  <div>
    {range(max).map(index => (
      <button key={index} onClick={() => onClick(index)}>{index}</button>
    ))}
  </div>
)
// slidersCount
export default connect(
  state => ({
    activeValue: state.length
  }),
  dispatch => ({
    onClick: index => dispatch({ type: 'set_size', count: index })
  })
)(ButtonGroup)
