/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    for (var i = nums1.length - 1; i > m - 1; i--) {
        if (nums1[i] == 0) {
            nums1[i] = nums2[--n];
        }
    }
    nums1.sort(function (a, b) { return a - b; });
    console.log(nums1);
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
