const array = generateRandomArray(10000)


const start = performance.now()
function quickSort(array) {
  if (array.length <= 1) {
    return array
  }

  const pivot = array[Math.floor(array.length / 2)]
  const left = []
  const right = []

  for (const element of array) {
    if (element < pivot) {
      left.push(element)
    } else if (element > pivot) {
      right.push(element)
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort(array))
const end = performance.now()
const elapsedMilliseconds = end - start
console.log('Execution time:', elapsedMilliseconds.toFixed(4) + 'ms')

function generateRandomArray(length) {
  const randomArray = []

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 100000) // Adjust the range as needed
    randomArray.push(randomNumber)
  }

  return randomArray
}
