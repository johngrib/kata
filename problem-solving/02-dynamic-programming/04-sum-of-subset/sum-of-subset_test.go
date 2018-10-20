package main

import "fmt"

func ExampleSubsetSum() {
	fmt.Println(subsetSum(
		[]int{6, 9, 13, 14, 20, 21, 22, 30, 49, 55}, 110))
	fmt.Println(subsetSumDp(
		[]int{6, 9, 13, 14, 20, 21, 22, 30, 49, 55}, 239))
	// Output:
	// true
	// true
}
