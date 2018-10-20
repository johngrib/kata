package main

import "fmt"

func ExampleCalcSimple() {

	way := [][]int{
		[]int{1, 1, 1, 1, 1},
		[]int{1, 1, 0, 0, 1},
		[]int{1, 1, 1, 1, 1},
		[]int{1, 1, 1, 0, 1},
		[]int{0, 0, 1, 1, 1},
	}

	fmt.Println(calcSimple(way))
	// Output:
	// 11
}
