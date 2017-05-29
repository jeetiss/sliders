import React from 'react'
import { connect } from 'react-redux'
import { range } from './../../utils'
import Slider from '../slider'
// import styles from './style..css'

const SliderGroup = ({ count, values, onChange }) => (
  <div>
    {range(count).map(index => (
      <Slider
        key={index}
        onChange={value => onChange(index - 1, value)}
        value={values[index - 1]}
      />
    ))}
  </div>
)

export default connect(
  state => ({ count: state.length, values: state }),
  dispatch => ({
    onChange: (index, value) =>
      dispatch({ type: 'change_value', index, value })
  })
)(SliderGroup)
