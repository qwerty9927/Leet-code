var isPalindrome = function (input) {
  let x = String(input)
  let left = 0
  let right = x.length - 1
  while (left < right) {
    if (x[left] !== x[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
