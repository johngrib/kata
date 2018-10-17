package main

func solution(a, b, sum int) int {

	next := a + b
	if next > 4000000 {
		return sum
	}
	if next%2 == 0 {
		return solution(b, next, sum+next)
	}
	return solution(b, next, sum)
}
