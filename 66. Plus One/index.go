package main

import (
	"fmt"
)

func plusOne(digits []int) []int {
	temp := 0
	i := len(digits) - 1
	for {
		temp = int(float64((digits[i] + 1) / 10))
		digits[i] = (digits[i] + 1) % 10
		if(temp != 0 && i == 0){
			digits = append([]int{temp}, digits...)
		}
		i--
		if temp == 0 || i < 0 {
			break
		}
	}
	return digits
}

func main() {
	arr := []int{1, 2, 3}
	fmt.Println(plusOne(arr))
}