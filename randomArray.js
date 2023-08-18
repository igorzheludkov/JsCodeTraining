function generateRandomArray(length) {
  const randomArray = []

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 100) // Adjust the range as needed
    randomArray.push(randomNumber)
  }

  return randomArray
}
