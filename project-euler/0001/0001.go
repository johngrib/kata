package main

import (
	"fmt"
)

func sumOf(interval, limit int) int {

	end := limit - 1
	last := end - int(end%interval)

	return int(last/interval) * (interval + last) / 2
}

func ExampleSumOf() {
	val := sumOf(3, 10) + sumOf(5, 10) - sumOf(15, 10)
	fmt.Println(val)

	// Output:
	// 23
}

func main() {
	limit := 1000
	val := sumOf(3, limit) + sumOf(5, limit) - sumOf(15, limit)
	fmt.Println(val)
}
