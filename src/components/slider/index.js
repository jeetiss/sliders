import React from 'react'
import styles from './style.css'

import { format } from './../../utils'

export default ({ value, onChange }) => {
  const props = {
    value,
    min: '0',
    max: '100',
    step: '0.01',
    onChange: e => onChange(format(e.target.value))
  }

  return (
    <div className={styles.slider_container}>
      <input type='range' {...props} />
      <input type='number' {...props} />
    </div>
  )
}
