package main

import (
	"fmt"
	"strconv"
)

const QUEUE_CAPACITY = 8

var queue []int
var head = 0
var tail = -1
var queue_size = 0

func enQueue(n int) {
	if len(queue) >= QUEUE_CAPACITY {
		fmt.Println("queue full!")
		return
	}
	queue = append(queue, n)
}

func deQueue() int {
	if len(queue) < 1 {
		fmt.Println("queue empty!")
		return 0
	}
	res := queue[0]
	queue = queue[1:]
	return res
}

func inputNumber() int {
	var userInput string
	fmt.Scanln(&userInput)
	val, _ := strconv.Atoi(userInput)
	return val
}

func main() {
mainLoop:
	for {
		fmt.Println("input number: ")
		number := inputNumber()

		switch {
		case number > 0:
			enQueue(number)
		case number == 0:
			fmt.Println("[", deQueue(), "]")
		case number <= 0:
			break mainLoop
		}
	}
}
