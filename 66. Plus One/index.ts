function plusOne(digits: number[]): number[] {
  let temp = 0
  let i = digits.length - 1
  do {
    temp = Math.floor((digits[i] + 1) / 10)
    digits[i] = (digits[i] + 1) % 10
    if (temp != 0 && i == 0) {
      digits.unshift(temp)
    }
    i--
  } while (temp != 0 && i >= 0)
  return digits
}
