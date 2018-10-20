package main

import "fmt"

func ExampleCalcEnjoyWay() {

	way := [][]int{
		[]int{1, 2, 2, 1, 5},
		[]int{1, 4, 4, 3, 1},
		[]int{2, 1, 1, 1, 2},
		[]int{1, 3, 5, 1, 1},
		[]int{1, 5, 1, 2, 2},
	}

	fmt.Println(calcEnjoyWay(way))

	// Output:
	// 22
}
