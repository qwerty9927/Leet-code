function maxArea(height: number[]): number {
  let maxContainer: number = 0
  let left: number = 0
  let right: number = height.length - 1
  while (left < right) {
    let minHeight: number = Math.min(height[left], height[right])
    let result: number = minHeight * (right - left)
    if (result > maxContainer) {
      maxContainer = result
    }
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxContainer
}
