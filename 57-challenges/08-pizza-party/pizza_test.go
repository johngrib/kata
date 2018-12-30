package main

import "fmt"

func Example_isEven() {
	fmt.Println(isEven(1))
	fmt.Println(isEven(2))
	fmt.Println(isEven(3))
	fmt.Println(isEven(4))
	// Output:
	// false
	// true
	// false
	// true
}

func Example_divide() {
	fmt.Println(dividePizza(8, 2, 8))
	// Output:
	// 2 0
}
