function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return ""

  const gcd = (a: number, b: number) => {
    if (b === 0) {
      return Math.abs(a)
    }

    return gcd(b, a % b)
  }

  return str1.substring(0, gcd(str1.length, str2.length))
}

console.log(gcdOfStrings("abcabc", "abc"))
