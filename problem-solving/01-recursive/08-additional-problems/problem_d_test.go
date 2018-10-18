package main

import "fmt"

func ExampleCalc() {
	fmt.Println(calc([]int{1, 3, 5, 4, 2}))
	fmt.Println(calc([]int{4, 3, 1, 5, 2}))

	// Output:
	// 4
	// 6
}
