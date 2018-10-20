package main

func calcSimple(way [][]int) int {

	for i := 1; i < len(way); i++ {
		for j := 1; j < len(way[i]); j++ {
			if way[i][j] == 0 {
				continue
			}
			way[i][j] = way[i-1][j] + way[i][j-1]
		}
	}
	return way[len(way)-1][len(way[0])-1]
}
