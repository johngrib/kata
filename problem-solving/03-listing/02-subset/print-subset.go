package main

import (
	"fmt"
	"sort"
)

var subChan chan []int = make(chan []int)

func printSubset(fixed, list []int) {
	if len(list) == 0 {
		subChan <- fixed
		return
	}
	go printSubset(fixed, list[1:])
	go printSubset(append(fixed, list[0]), list[1:])
}

func pow(n, m int) int {
	if m == 1 {
		return n
	}
	return n * pow(n, m-1)
}

func runPrintSubset() {

	list := []int{1, 2, 3, 4, 5}
	size := pow(2, len(list))
	result := [][]int{}

	go printSubset([]int{}, list)

	for i := 0; i < size; i++ {
		sub := <-subChan
		result = append(result, sub)
	}

	sort.SliceStable(result, func(a, b int) bool {
		return len(result[a]) < len(result[b])
	})
	fmt.Println(result)
}

func main() {
	runPrintSubset()
}
