package main

func countOrdered(number int) int {

	cnt := 0
	for i := 0; i < number; i++ {
		cnt += combination(number-1, i)
	}
	return cnt
}

func combination(n, r int) int {
	if r == 1 {
		return n
	}
	if r == 0 || n == r {
		return 1
	}
	return combination(n-1, r) + combination(n-1, r-1)
}
