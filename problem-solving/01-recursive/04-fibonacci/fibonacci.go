package main

var memo map[uint]uint = make(map[uint]uint)

func fibo(n uint) uint {
	if n == 1 || n == 2 {
		return 1
	}
	if val, ok := memo[n]; ok {
		return val
	}
	res := fibo(n-1) + fibo(n-2)
	memo[n] = res
	return res
}
