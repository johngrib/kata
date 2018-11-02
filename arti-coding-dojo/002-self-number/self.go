package main

import (
	"strconv"
)

const OFFSET int32 = '0'

func generateFrom(n int) int {
	var sum int32 = 0
	for _, digit := range []int32(strconv.Itoa(n)) {
		sum += digit - OFFSET
	}
	return n + int(sum)
}

func calc(limit int) int {

	memo := make(map[int]bool)
	total := (1 + limit) * limit / 2

	for i := 1; i <= limit; i++ {
		d_n := generateFrom(i)

		if _, ok := memo[d_n]; !ok && d_n <= limit {
			total -= d_n
			memo[d_n] = true
		}
	}
	return total
}
