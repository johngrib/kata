package main

import "fmt"

func repCom(n, k int, set []int) {
	if k < 1 {
		fmt.Println(set)
		return
	}
	if n < 0 {
		return
	}
	for i := 0; i <= n; i++ {
		repCom(n, k-1, append(set, i))
	}
}

func repetition_combination(n, k int) {
	repCom(n-1, k, []int{})
}
