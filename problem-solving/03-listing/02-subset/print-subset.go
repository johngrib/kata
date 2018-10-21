package main

import "fmt"
import "sync"

func printSubset(fixed, list []int) {
	if len(list) == 0 {
		fmt.Println(fixed)
		return
	}
	var wait sync.WaitGroup
	wait.Add(2)

	go func() {
		defer wait.Done()
		printSubset(fixed, list[1:])
	}()

	go func() {
		defer wait.Done()
		printSubset(append(fixed, list[0]), list[1:])
	}()
	wait.Wait()
}

func main() {
	printSubset([]int{}, []int{1, 2, 3, 4, 5})
}
