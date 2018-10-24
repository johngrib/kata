package main

import "fmt"

func ExampleSackProblem() {
	items := []Item{
		Item{0, 2, 3},
		Item{1, 3, 5},
		Item{2, 3, 7},
		Item{3, 4, 4},
		Item{4, 4, 3},
		Item{5, 5, 9},
		Item{6, 7, 2},
		Item{7, 8, 9},
		Item{8, 8, 5},
		Item{9, 9, 10},
	}
	var sa Sack
	s := putSimulation(items, sa.New(20))
	fmt.Println(s)

	// Output:
	// {4,6,8,9} 28
}
