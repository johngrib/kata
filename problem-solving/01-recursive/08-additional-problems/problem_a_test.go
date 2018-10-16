package main

import "fmt"

/*
sum_power(3, 2) == 14		// https://www.wolframalpha.com/input/?i=sum+i%3D1+to+3+i%5E2
sum_power(4, 3) == 100		// https://www.wolframalpha.com/input/?i=sum+i%3D1+to+4+i%5E3
sum_power(10, 4) == 25333	// https://www.wolframalpha.com/input/?i=sum+i%3D1+to+10+i%5E4

*/
func ExampleSumPowerRecursive() {

	fmt.Println(sum_power_recursive(3, 2))
	fmt.Println(sum_power_recursive(4, 3))
	fmt.Println(sum_power_recursive(10, 4))

	// Output:
	// 14
	// 100
	// 25333
}

func ExampleSumPowerLoop() {

	fmt.Println(sum_power_loop(3, 2))
	fmt.Println(sum_power_loop(4, 3))
	fmt.Println(sum_power_loop(10, 4))

	// Output:
	// 14
	// 100
	// 25333
}
