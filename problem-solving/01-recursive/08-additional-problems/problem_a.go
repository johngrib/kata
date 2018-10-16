package main

import (
	"math"
)

func power(n, k int) int {
	return int(math.Pow(float64(n), float64(k)))
}

func sum_power_recursive(n, k int) int {
	if n == 1 {
		return 1
	}
	return power(n, k) + sum_power_recursive(n-1, k)
}

func sum_power_loop(n, k int) int {
	value := 0
	for i := 1; i <= n; i++ {
		value += power(i, k)
	}
	return value
}
