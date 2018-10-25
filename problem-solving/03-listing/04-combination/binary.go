package main

import "fmt"

func comb2(bits []int, n int, k int) {
	if len(bits) == n && k > 0 {
		return
	}
	if len(bits) == n {
		fmt.Println(bits)
		return
	}
	if k < 1 {
		fmt.Println(appendTail(bits, n))
		return
	}
	comb2(append(bits, 0), n, k)
	comb2(append(bits, 1), n, k-1)
}

func appendTail(bits []int, n int) []int {
	limit := n - len(bits)
	for i := 0; i < limit; i++ {
		bits = append(bits, 0)
	}
	return bits
}
