var isValid = function (s) {
  if (s.length % 2 != 0) {
    return false
  }
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  }
  let array = [s[0]]
  for (let i = 1; i < s.length; i++) {
    if (obj[array[array.length - 1]] == s[i]) {
      array.pop()
    } else {
      array.push(s[i])
    }
  }
  return !array.length
}
