// Returns string with the first letter to upper case. Combined names have each (- separated) name capitalized.
const capitalizeName = (str) => {
  if (!str) return undefined

  let split = str.split(/(-)/g)
  return split.map(str => str.charAt(0).toUpperCase() + str.slice(1))
}

export default {
  capitalizeName,
}