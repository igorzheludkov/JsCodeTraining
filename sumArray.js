const array = []
for (let i = 1; i <= 100000000; i++) {
  array.push(i)
}

function sum(array) {
  const start = performance.now()

  let result = 0
  Array.isArray(array) &&
    array.forEach((item) => {
      if (typeof item === 'number' && !isNaN(item)) {
        result += item * 2
      }
    })

  const end = performance.now()
  const elapsedMilliseconds = end - start
  console.log('Execution time:', elapsedMilliseconds.toFixed(4) + 'ms')

  return result
}

console.log('result', sum(array))
