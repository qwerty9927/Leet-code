package main

import "fmt"

func lengthOfLastWord(s string) int {
	count := 0
	for i := len(s) - 1;i >= 0;i-- {
			if (string(s[i]) == " " && count == 0) {
					continue
			}
			if (string(s[i]) == " ") {
					break
			}
			count++
	}
	return count
}

func main(){
	fmt.Println(lengthOfLastWord("abcd 123  "))
}