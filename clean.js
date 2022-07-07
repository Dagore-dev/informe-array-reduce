export function clean (obj) {
  const result = {}

  if (obj.logestStringIndex !== -1) {
    result.longestString = obj.longestString
    result.longestStringIndex = obj.longestStringIndex
  }

  if (obj.count !== 0) {
    result.count = obj.count
    result.sum = obj.sum
    result.multiply = obj.multiply
    result.min = obj.min
    result.max = obj.max

    result.mean = result.sum / result.count
  }

  if ((obj.and && obj.or) || (!obj.and && !obj.or) || (!obj.and && obj.or)) {
    result.and = obj.and
    result.or = obj.or
  }

  return result
}
