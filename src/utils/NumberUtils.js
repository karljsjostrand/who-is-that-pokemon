// Returns a random integer between 0 and max.
const getRandomIntFromZeroTo = (max) => {
  const min = 0
  return Math.round(Math.random() * (max - min) + min)
}

export {
  getRandomIntFromZeroTo,
}