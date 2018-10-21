package main

import "fmt"

func ExampleCalcInvest() {

	table := [][]int{
		[]int{0, 2, 4, 6, 9}, // 회사0 에 index 원을 투자할 경우의 이익
		[]int{0, 3, 5, 6, 8}, // 회사1 에 index 원을 투자할 경우의 이익
		[]int{0, 1, 3, 7, 9}, // 회사2 에 index 원을 투자할 경우의 이익
	}
	fmt.Println(calcInvest(4, table))

	// Output:
	// 10
}
