package main

type inp struct {
	number, splitNumber uint64
}

var memo = make(map[inp]uint64)

func count(number, splitNumber uint64) uint64 {

	if number < splitNumber {
		splitNumber = number
	}
	if number == 0 {
		return 1
	}

	if val, ok := memo[inp{number, splitNumber}]; ok {
		return val
	}

	var i, cnt uint64 = 0, 0

	for i = 1; i <= splitNumber; i++ {
		cnt += count(number-i, i)
	}
	memo[inp{number, splitNumber}] = cnt
	return cnt
}
