package main

import (
	"fmt"
	"strconv"
)

func calcArea(x, y float32) float32 {
	return x * y * 0.09290304
}

func inputNumber() int {
	var userInput string
	fmt.Scanln(&userInput)
	val, _ := strconv.Atoi(userInput)
	return val
}

func main() {
	fmt.Println("What is the length of the room in feet?")
	length := inputNumber()

	fmt.Println("What is the width of the room in feet?")
	width := inputNumber()

	fmt.Println("You entered dimensions of", length, "feet by", width, "feet")
	fmt.Println("The area is")
	fmt.Println(length*width, "feet")
	fmt.Println(calcArea(float32(length), float32(width)), "square meters")
}
