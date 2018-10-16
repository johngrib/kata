package main

import "fmt"

func printPartition(n, m int) {
	partition(n, m, []int{})
}

func partition(n, m int, list []int) {
	if n == 1 || m == 1 {
		list = append(list, n)
		fmt.Println(list)
		return
	}
	if n == 0 || m == 0 {
		fmt.Print(list)
		return
	}

	for i := 1; i <= n-(m-1); i++ {
		partition(n-i, m-1, append(list, i))
	}
}
