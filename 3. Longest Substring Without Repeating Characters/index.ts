function lengthOfLongestSubstring(s: string): number {
  let string: string = ""
  let max: number = 0
  for (let i = 0; i < s.length; i++) {
    const index = string.indexOf(s[i])
    if (index == -1) {
      string += s[i]
    } else {
      string = string.slice(index + 1)
      string += s[i]
    }
    if (string.length > max) {
      max = string.length
    }
  }
  return max
}

console.log(lengthOfLongestSubstring("aab"))
