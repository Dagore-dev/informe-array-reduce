export function reducer (acumulated, current, index) {
  switch (typeof current) {
    case 'string':
      if (acumulated.longestString.length < current.length) {
        acumulated.longestString = current
        acumulated.longestStringIndex = index
      }
      break
    case 'number':
      acumulated.count++
      acumulated.sum += current
      acumulated.multiply *= current
      acumulated.min = current > acumulated.min ? acumulated.min : current
      acumulated.max = current < acumulated.max ? acumulated.max : current
      break
    case 'boolean':
      acumulated.and = acumulated.and && current
      acumulated.or = acumulated.or || current
      break
    default:
      break
  }

  return acumulated
}
