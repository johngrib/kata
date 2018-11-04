package main

import "fmt"

const (
	MAXN = 100
	L    = 0
	R    = 1
)

func print(arr []int) {

	size := len(arr)
	for i := 0; i < size; i++ {
		if arr[i] == L {
			fmt.Printf("(")
		} else if arr[i] == R {
			fmt.Printf(")")
		}
	}
	fmt.Println("")
}

func paren(to_open, to_close int, arr []int, arr_size int) {
	if to_open == 0 && to_close == 0 {
		print(arr)
		return
	}
	if to_open > 0 {
		arr[arr_size] = L
		paren(to_open-1, to_close+1, arr, arr_size+1)
	}
	if to_close > 0 {
		arr[arr_size] = R
		paren(to_open, to_close-1, arr, arr_size+1)
	}
}
