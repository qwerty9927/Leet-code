function reverse(x: number): number {
  let rev: any
  if (x < 0) {
    rev = parseInt(String(x).split("").slice(1).reverse().join("")) * -1
  } else {
    rev = parseInt(String(x).split("").reverse().join(""))
  }
  if (-Math.pow(2, 31) > rev || rev > Math.pow(2, 31) - 1) {
    return 0
  }
  return rev
}
