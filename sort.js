const array = generateRandomArray(10000)

function calculate(array) {
  const start = performance.now()

  let sort = []
  let stack = array

  while (stack.length !== 0) {
    let currentMin = array[0]
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] < currentMin) {
        currentMin = array[i]
      }
    }
    const index = stack.indexOf(currentMin)
    stack.splice(index, 1)
    sort.push(currentMin)
  }
  const end = performance.now()
  const elapsedMilliseconds = end - start
  console.log('Execution time:', elapsedMilliseconds.toFixed(4) + 'ms')

  return { sort }
}

console.log(calculate(array))


function generateRandomArray(length) {
  const randomArray = []

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 100000) // Adjust the range as needed
    randomArray.push(randomNumber)
  }

  return randomArray
}

