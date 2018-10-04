package main

import "fmt"

func ExampleCalc() {

	calc("X", 10, 10)
	fmt.Println("")

	calc("V", 5, 5)
	fmt.Println("")

	calc("X", 10, 40)
	fmt.Println("")

	// Output:
	// X
	// V
	// XXXX
}

func ExamplePrintRoman() {

	printRoman(3346)
	printRoman(1954)
	printRoman(1776)
	printRoman(1066)

	// Output:
	// MMMCCCXLVI
	// MCMLIV
	// MDCCLXXVI
	// MLXVI
}
