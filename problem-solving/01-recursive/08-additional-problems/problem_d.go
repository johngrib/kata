package main

func calc(list []int) int {
	if len(list) <= 1 {
		return 0
	}
	count := 0
	for _, v := range list[1:] {
		if v < list[0] {
			count++
		}
	}
	return count + calc(list[1:])
}
