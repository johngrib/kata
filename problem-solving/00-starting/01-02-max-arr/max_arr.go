package main

import "errors"

func max_arr(arr []int) (int, error) {
	if len(arr) < 1 {
		return -1, errors.New("empty array")
	}
	max := arr[0]
	for _, v := range arr {
		if v > max {
			max = v
		}
	}
	return max, nil
}
