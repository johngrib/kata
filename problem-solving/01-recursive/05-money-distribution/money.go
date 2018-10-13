package main

func pay(money int, bills []int) int {

	count := 0

	if len(bills) == 1 {
		if money%bills[0] == 0 {
			return 1
		} else {
			return 0
		}
	}
	tail := len(bills) - 1
	bill := bills[tail]
	limit := money / bill

	for i := 0; i <= limit; i++ {
		count += pay(money-(i*bill), bills[:tail])
	}
	return count
}
