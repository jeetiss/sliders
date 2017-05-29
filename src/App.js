import React from 'react'

import SliderGroup from './components/slidergroup'
import ButtonGroup from './components/buttongroup'
import Info from './components/info'

function App () {
  return (
    <div>
      <ButtonGroup max='5' />
      <SliderGroup />
      <Info />
    </div>
  )
}

export default App
