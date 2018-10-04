package main

import "fmt"
import "strconv"

func main() {

	var firstInput, secondInput string

	fmt.Println("What is the first number? ")
	fmt.Scanln(&firstInput)

	fmt.Println("What is the second number? ")
	fmt.Scanln(&secondInput)

	first, _ := strconv.Atoi(firstInput)
	second, _ := strconv.Atoi(secondInput)

	fmt.Printf("%d + %d = %d\n", first, second, first+second)
	fmt.Printf("%d - %d = %d\n", first, second, first-second)
	fmt.Printf("%d * %d = %d\n", first, second, first*second)
	fmt.Printf("%d / %d = %d\n", first, second, first/second)
}
