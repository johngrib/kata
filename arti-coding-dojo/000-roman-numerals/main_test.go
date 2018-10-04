package main

import "fmt"

func ExamplePrintRoman() {

	fmt.Println(printRoman(3346))
	fmt.Println(printRoman(1954))
	fmt.Println(printRoman(1776))
	fmt.Println(printRoman(1066))

	// Output:
	// MMMCCCXLVI
	// MCMLIV
	// MDCCLXXVI
	// MLXVI
}
