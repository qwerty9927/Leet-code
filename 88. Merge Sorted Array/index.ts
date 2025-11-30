/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = nums1.length - 1; i > m - 1; i--) {
    nums1[i] = nums2[--n]
  }
  nums1.sort((a, b) => a - b)
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
