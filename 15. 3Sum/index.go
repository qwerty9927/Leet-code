package main

import (
	"fmt"
	"sort"
)
func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	var result [][]int
	for i := 0;i < len(nums);i++ {
		if i > 0 && nums[i] == nums[i - 1] {
			continue
		}
		left := i
		mid := i + 1
		right := len(nums) - 1
		for mid < right {
			sum := nums[left] + nums[mid] + nums[right]
			if sum < 0 {
				mid ++
			} else if sum > 0 {
				right --
			} else {
				newEle := []int{nums[left], nums[mid], nums[right]}
				result = append(result, newEle)
                mid++
				for mid < right && nums[mid] == nums[mid - 1] {
					mid++
				}
			}
		}
	}
	return result
}

func main() {
	arr := []int{-1,0,1,2,-1,-4}
	fmt.Println(threeSum(arr))
}