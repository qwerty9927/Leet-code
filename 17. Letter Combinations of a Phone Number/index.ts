function letterCombinations(digits: string): string[] {
  if (digits === "") return []
  let phoneString: string[] = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  let result: string[] = []
  function backTrack(combination: string, nextDigits: string) {
    if (nextDigits === "") {
      result.push(combination)
      return
    }
    let letters = phoneString[parseInt(nextDigits[0]) - 2]
    for (let i of letters) {
      backTrack(combination + i, nextDigits.slice(1))
    }
  }
  backTrack("", digits)
  return result
}
