package main

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func calcEnjoyWay(way [][]int) int {

	up := func(i, j int) int {
		if i == 0 {
			return 0
		}
		return way[i-1][j]
	}

	left := func(i, j int) int {
		if j == 0 {
			return 0
		}
		return way[i][j-1]
	}

	for i := 0; i < len(way); i++ {
		for j := 0; j < len(way[i]); j++ {
			way[i][j] += max(up(i, j), left(i, j))
		}
	}
	return way[len(way)-1][len(way[0])-1]
}
