package main

// O(n^2)
func max_con_sum2(list []int) int {

	maxSum := 0
	for i, _ := range list {
		sum := 0
		for j := i; j < len(list); j++ {
			sum += list[j]
			if sum > maxSum {
				maxSum = sum
			}
		}
	}
	return maxSum
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// O(n)
func max_con_sum4(list []int) int {

	memo := list[0]
	maxSum := 0

	for i, num := range list {
		if i != 0 {
			memo = max(num, num+memo)
		}
		if memo > maxSum {
			maxSum = memo
		}
	}
	return maxSum
}
