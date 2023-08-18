const array = [5, 2, 1000, 3, 12, 1, 0, -1]

function minMax(array) {
  let currentMax = array[0]
  let currentMin = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] > currentMax) {
      currentMax = array[i]
    }
    if (array[i] < currentMin) {
      currentMin = array[i]
    }
  }

  return { currentMax, currentMin }
}

console.log('result', minMax(array))
