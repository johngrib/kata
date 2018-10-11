package main

func factorialLoop(n int) int {
	result := 1
	for n > 1 {
		result *= n
		n--
	}
	return result
}

func factorial(n int) int {
	if n <= 1 {
		return 1
	}
	return n * factorial(n-1)
}
