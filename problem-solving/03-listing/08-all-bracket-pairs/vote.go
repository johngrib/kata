package main

import "fmt"

func vote(m, n int, res string) {
	if m < 0 || n < 0 {
		return
	}
	if m == 0 && n == 0 {
		fmt.Println(res)
		return
	}
	vote(m-1, n, res+"+")
	vote(m, n-1, res+"-")
	return
}
