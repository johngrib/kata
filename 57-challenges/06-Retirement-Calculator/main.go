package main

import (
	"fmt"
	"strconv"
	"time"
)

func inputNumber() int {
	var userInput string
	fmt.Scanln(&userInput)
	val, _ := strconv.Atoi(userInput)
	return val
}

func main() {

	fmt.Println("What is your current age")
	age := inputNumber()

	fmt.Println("At what age would you like to retire?")
	retire := inputNumber()

	fmt.Println("You have", retire-age, "years left until you can retire.")

	year := time.Now().Year()
	fmt.Println("It's", year, "so you can reitre in", year+(retire-age))
}
