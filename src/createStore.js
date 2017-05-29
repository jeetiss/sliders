import { createStore as cs } from 'redux'
import { sliders } from './reducers/reducer'

export default function createStore () {
  return cs(sliders)
}

