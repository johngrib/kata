package main

import "fmt"

func rcomb(n, k int, set []int) {
	if k < 1 {
		fmt.Println(set)
		return
	}
	if n < 0 {
		return
	}
	rcomb(n, k-1, append(set, n))
	rcomb(n-1, k, set)
}
