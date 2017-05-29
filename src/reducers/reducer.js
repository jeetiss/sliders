import { format } from './../utils'

const defaultSliders = [100, 0, 0, 0]
export function sliders (state, action) {
  switch (action.type) {
    case 'set_size':
      return rebalance(
        state.length > action.count
          ? state.slice(0, action.count)
          : state.concat(Array(action.count - state.length).fill(0)),
        0
      )
    case 'change_value':
      state[action.index] = action.value
      return rebalance(state, action.index)
    default:
      return state || defaultSliders
  }
}

const rebalance = (array, index) => {
  if (array.length === 1) return array.slice()
  const value = array[index]

  array.splice(index, 1)
  const elementsForChange = array
  const sum = elementsForChange.reduce((acc, next) => acc + next, 0)

  const over = 100 - sum - value

  const comporator = val => (a, b) => (a.value - b.value) * Math.sign(val)

  const sortedElementsForChange = elementsForChange
    .map((value, index) => ({
      value,
      index
    }))
    .sort(comporator(over))

  let i = 0
  let count = 0
  let sumOfMin = 0
  let testValue

  do {
    ++count
    sumOfMin += sortedElementsForChange[i++].value
    testValue = (sumOfMin + over) / count
  } while (i < sortedElementsForChange.length &&
    ((testValue - sortedElementsForChange[i].value) * Math.sign(over) > 0 ||
      testValue < 0))

  for (let i = 0; i < count; ++i) {
    sortedElementsForChange[i] = {
      value: format(testValue),
      index: sortedElementsForChange[i].index
    }
  }

  const rebalancedElements = sortedElementsForChange
    .sort((a, b) => a.index - b.index)
    .map(({ value }) => value)

  rebalancedElements.splice(index, 0, value)

  return rebalancedElements
}
