package main

import (
	"fmt"
	"strconv"
)

func letterCombinations(digits string) []string {
	if digits == "" {
		return nil
	}

	var result []string
	phoneString := []string{"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}
	var backTrack func(combination string, nextDigits string)
	backTrack = func(combination string, nextDigits string) {
		if nextDigits == "" {
			result = append(result, combination)
		} else {
			num, _ := strconv.Atoi(nextDigits[0:1])

			letters := phoneString[num - 2]
			for _, letter := range letters {
				backTrack(combination + string(letter), nextDigits[1:])
			}
		}
	}
	backTrack("", digits)
	return result
}

func main(){
	result := letterCombinations("234")
	fmt.Println(result)
}