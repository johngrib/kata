package main

import (
	"fmt"
	"strconv"
)

func dividePizza(people, pizza, slice int) (int, int) {
	if !isEven(slice) {
		fmt.Println("slice should be a even number")
		return 0, slice * pizza
	}
	if slice < 1 {
		fmt.Println("slice should be greater than 0")
		return 0, slice * pizza
	}

	pieces := (pizza * slice) / people
	left := (pizza * slice) % people

	return pieces, left
}

func isEven(number int) bool {
	return number&1 != 1
}

func inputNumber() int {
	var userInput string
	fmt.Scanln(&userInput)
	val, _ := strconv.Atoi(userInput)
	return val
}

func main() {
	fmt.Print("How many people? ")
	people := inputNumber()

	fmt.Print("How many pizzas do you have? ")
	pizza := inputNumber()

	fmt.Print("How many pieces are in a pizza? ")
	slice := inputNumber()

	fmt.Printf("%d people with %d pizzas\n", people, pizza)

	pieces, left := dividePizza(people, pizza, slice)
	fmt.Printf("Each person gets %d pieces of pizza.", pieces)
	fmt.Printf("There are %d leftover pieces.", left)
}
