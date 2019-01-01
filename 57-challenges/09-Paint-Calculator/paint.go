package main

import (
	"fmt"
	"math"
	"strconv"
)

const AREA_PER_SQUARE = 9

func inputNumber() int {
	var userInput string
	fmt.Scanln(&userInput)
	val, _ := strconv.Atoi(userInput)
	return val
}

func main() {
	fmt.Println("input length:")
	length := inputNumber()

	fmt.Println("input width:")
	width := inputNumber()

	area := length * width
	paint := math.Ceil(float64(area) / float64(AREA_PER_SQUARE))
	paintCan := int(paint)

	fmt.Printf(
		"You will need to purchase %d liters of paint to cover %d square meters.",
		paintCan, area)
}
