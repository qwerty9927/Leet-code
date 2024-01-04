function removeElement(nums: number[], val: number): number {
  let left: number = 0
  let right: number = nums.length - 1
  if (nums.length === 1 && nums[0] === val) {
    return 0
  } else if (nums.length === 1 && nums[0] !== val) {
    return 1
  }
  while (left <= right) {
    while (nums[left] != val && left <= right) left++
    while (nums[right] == val && left <= right) right--
    if (left < right) {
      ;[nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }

  return left
}
