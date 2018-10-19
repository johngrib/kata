package main

import "fmt"

func ExampleJosephus_Recur() {
	// Output:
	fmt.Println(josephus_recur(1))
	// 1
	fmt.Println(josephus_recur(5))
	// 3
	fmt.Println(josephus_recur(6))
	// 5
	fmt.Println(josephus_recur(13))
	// 11
	fmt.Println(josephus_recur(15))
	// 15
	fmt.Println(josephus_recur(16))
	// 1
	fmt.Println(josephus_recur(100))
	// 73
}
