package main

import "fmt"

func calcInvest(money int, table [][]int) int {

	memo := make([][]int, len(table), len(table))
	for i, _ := range memo {
		memo[i] = make([]int, money+1, money+1)
	}
	// 회사 0에만 투자하는 경우는 이익 예상 테이블과 똑같은 결과가 나온다
	for i := 0; i <= money; i++ {
		memo[0][i] = table[0][i]
	}

	// 여기부터 2개 이상의 회사에 투자하는 경우를 다룬다

	// co : company
	// inv : invest money
	for co := 1; co < len(table); co++ {
		for inv := 1; inv <= money; inv++ {
			max := -1
			// co번 회사에 k원을 투자할 때
			// 한 단계 적은 회사 수에 투자했던 기록 중에서
			// 나머지 금액(inv - k원)으로 최대 수익을 낸 결과를 가져와 더해본다
			for k := 0; k <= inv; k++ {
				profit := table[co][k] + memo[co-1][inv-k]
				if profit > max {
					max = profit
				}
			}
			// 가장 최고의 수익을 올린 결과를 기록한다
			memo[co][inv] = max
		}
		// fmt.Println(co)
		// for _, v := range memo {
		// 	fmt.Println(v)
		// }
	}
	return memo[len(memo)-1][len(memo[0])-1]
}

func _main() {

	table := [][]int{
		[]int{0, 2, 4, 6, 9}, // 회사0 에 index 원을 투자할 경우의 이익
		[]int{0, 3, 5, 6, 8}, // 회사1 에 index 원을 투자할 경우의 이익
		[]int{0, 1, 3, 7, 9}, // 회사2 에 index 원을 투자할 경우의 이익
	}
	fmt.Println(calcInvest(4, table))
}
