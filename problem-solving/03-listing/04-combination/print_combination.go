package main

import "fmt"

func comb(set []int, n int, k int) {
	if k < 1 {
		fmt.Println(set)
		return
	}
	if n < 0 {
		return
	}
	comb(set, n-1, k)
	comb(append(set, n), n-1, k-1)
}

func main() {
	fmt.Println("------")
	comb([]int{}, 3, 2)
}
