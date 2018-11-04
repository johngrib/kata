package main

import "fmt"

func permut(arr []int, head, n, k int) {

	if head == k {
		fmt.Println(arr[:head])
		return
	}

	for i := head; i < n; i++ {
		arraySwap(arr, i, head)
		permut(arr, head+1, n, k)
		arraySwap(arr, i, head)
	}
}

func arraySwap(arr []int, a, b int) {
	temp := arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}

func printPermut(n, k int) {
	arr := make([]int, n, n)

	for i := 0; i < n; i++ {
		arr[i] = i
	}

	permut(arr, 0, n, k)
}

func main() {

	n := 3
	k := 3

	printPermut(n, k)
}
