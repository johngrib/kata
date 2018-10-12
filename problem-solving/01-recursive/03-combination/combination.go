package main

import "fmt"

type com struct {
	n int
	r int
}

var memo = map[com]int{}

func combination(n, r int) int {

	if r == 0 || n == r {
		return 1
	}
	c := com{n, r}

	if val, ok := memo[c]; ok {
		return val
	}
	memo[c] = combination(n-1, r-1) + combination(n-1, r)
	return memo[c]
}

func main() {
	fmt.Println("vim-go")
}
