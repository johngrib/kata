package main

import "fmt"

func ExampleMaxConSum2() {

	fmt.Println(max_con_sum2(
		[]int{33, 36, -73, 15, 43, -17, 36, -28, -1, 21}))
	//.....................^------------^
	fmt.Println(max_con_sum2(
		[]int{31, -41, 59, 26, -53, 58, 97, -93, -23, 84}))
	//.................^----------------^
	// Output:
	// 77
	// 187
}

func ExampleMaxConSum4() {

	fmt.Println(max_con_sum4(
		[]int{33, 36, -73, 15, 43, -17, 36, -28, -1, 21}))
	//.....................^------------^
	fmt.Println(max_con_sum4(
		[]int{31, -41, 59, 26, -53, 58, 97, -93, -23, 84}))
	//.................^----------------^
	// Output:
	// 77
	// 187
}
