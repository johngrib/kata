package main

func right_rotate(arr []int, startIndex, lastIndex int) {
	last := arr[lastIndex]
	for i := lastIndex; i > startIndex; i-- {
		arr[i] = arr[i-1]
	}
	arr[startIndex] = last
}
