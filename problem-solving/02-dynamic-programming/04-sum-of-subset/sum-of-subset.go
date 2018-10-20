package main

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// 재귀. 중복 계산이 있다.
func subsetSum(list []int, want int) bool {
	if len(list) == 0 {
		if want == 0 {
			return true
		}
		return false
	}
	return subsetSum(list[1:], want-list[0]) || subsetSum(list[1:], want)
}

// Dynamic Programming 방법.
func subsetSumDp(list []int, want int) bool {
	memo := make([][]bool, len(list)+1, len(list)+1)

	for i, _ := range memo {
		memo[i] = make([]bool, want+1, want+1)
		memo[i][0] = true
	}

	// 이 원소를 추가했을 때 원하는 합이 완성되는가?
	isEnable := func(sum, atom, check int) bool {
		return (sum >= atom && memo[check-1][sum-atom])
	}

	// 이미 더 적은 원소를 써서 원하는 합이 완성되었는가?
	isCompleted := func(sum, check int) bool {
		return memo[check-1][sum]
	}

	for i, atom := range list {
		check := i + 1
		for sum := 1; sum <= want; sum++ {
			if isEnable(sum, atom, check) || isCompleted(sum, check) {
				memo[check][sum] = true
			}
		}
	}
	return memo[len(memo)-1][want]
}
