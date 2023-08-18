const array = [5, 2, 1000, 3, 12, 1, 0, -1]

function calculate(array) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      result.push(i)
    }
  }

  return { result }
}

console.log('result', calculate(array))
