package main

import "fmt"
import "strings"

type com struct {
	n, r int
}

var memo = make(map[com]int)

func pascal(n int) {

	for i := 0; i <= n; i++ {
		fmt.Print(strings.Repeat("   ", n-i))
		for j := 0; j <= i; j++ {
			fmt.Printf("%3d", combination(i, j))
			if j != i {
				fmt.Print("   ")
			}
		}
		fmt.Println("")
	}
}

func combination(n, r int) int {
	if n == r || r == 0 {
		return 1
	}
	if r == 1 {
		return n
	}
	if c := n - r; c < r {
		r = c
	}
	if val, ok := memo[com{n, r}]; ok {
		return val
	}
	result := combination(n-1, r-1) + combination(n-1, r)
	memo[com{n, r}] = result
	return result
}
