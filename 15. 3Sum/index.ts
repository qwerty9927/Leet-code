/**
  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

  Notice that the solution set must not contain duplicate triplets.

  

  Example 1:

  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]
  Explanation: 
  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
  The distinct triplets are [-1,0,1] and [-1,-1,2].
  Notice that the order of the output and the order of the triplets does not matter.
  Example 2:

  Input: nums = [0,1,1]
  Output: []
  Explanation: The only possible triplet does not sum up to 0.
  Example 3:

  Input: nums = [0,0,0]
  Output: [[0,0,0]]
  Explanation: The only possible triplet sums up to 0.
*/
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  let result = new Array<number[]>()
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i
    let mid = i + 1
    let right = nums.length - 1
    while (mid < right) {
      let third = 0 - (nums[left] + nums[right])
      if (nums[mid] === third) {
        result.push([nums[left], nums[mid], nums[right]])
        mid++
        while (mid < right && nums[mid] === nums[mid - 1]) mid++
      } else if (nums[mid] > third) {
        right--
      } else {
        mid++
      }
    }
  }
  return result
}
