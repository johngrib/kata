package main

import "fmt"

func ExampleMoney() {
	rs := pay(100, []int{1, 2, 5, 10, 20, 50})
	fmt.Println(rs)

	rs2 := pay(300, []int{1, 2, 5, 10, 20, 50, 100})
	fmt.Println(rs2)

	// Output:
	// 4562
	// 466800
}
