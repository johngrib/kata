package main

import "fmt"

func ExampleCombination() {

	fmt.Println(combination(3, 1))
	fmt.Println(combination(5, 2))

	// Output:
	// 3
	// 10
}

func ExampleCountOrdered() {
	fmt.Println(countOrdered(1))
	fmt.Println(countOrdered(2))
	fmt.Println(countOrdered(3))
	// Output:
	// 1
	// 2
	// 4
}
