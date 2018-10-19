package main

/*
점화식
J(1) = 1;
J(2n) = 2 J(n) − 1 , for n ≥ 1
J(2n + 1) = 2 J(n) + 1 , for n ≥ 1
*/

func josephus_recur(n int) int {
	if n == 1 {
		return 1
	}
	if n%2 == 0 {
		return 2*josephus_recur(n/2) - 1
	}
	return 2*josephus_recur((n-1)/2) + 1
}
