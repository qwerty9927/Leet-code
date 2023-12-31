var longestCommonPrefix = function (strs) {
  let result = ""
  let maps = new Map()
  for (let i = 0; i < strs[0].length; i++) {
    maps.set(strs[0][i], 1)
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] === strs[j][i]) {
        maps.set(strs[0][i], maps.get(strs[0][i]) + 1)
      }
    }
    // console.log(maps)
    if (maps.get(strs[0][i]) === strs.length) {
      result += strs[0][i]
    } else {
      if (result != "") {
        return result
      }
      return ""
    }
  }
  return result
}
