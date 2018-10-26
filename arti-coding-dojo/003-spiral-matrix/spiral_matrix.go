package main

import "fmt"

type Matrix struct {
	_00, _01 int
	_10, _11 int
}

func (m Matrix) turn(w Way) Way {
	x := m._00*w.x + m._01*w.y
	y := m._10*w.x + m._11*w.y
	return Way{x, y}
}

var Rect Matrix = Matrix{
	0, 1,
	-1, 0,
}

type Way struct{ x, y int }

func (w Way) walk(next Way) Way {
	return Way{w.x + next.x, w.y - next.y}
}

type Board [][]int

func (b Board) set(w Way, num int) {
	b[w.y][w.x] = num
}

func (b Board) String() string {
	s := ""
	for _, row := range b {
		s += fmt.Sprintf("%v\n", row)
	}
	return s
}

func NewBoard(n int) Board {
	b := make([][]int, n, n)
	for i := 0; i < n; i++ {
		b[i] = make([]int, n, n)
	}
	return b
}

func steps(n int) []int {
	steps := []int{n}
	for n > 1 {
		n--
		steps = append(steps, n, n)
	}
	return steps
}

func run(n int) Board {
	mat := NewBoard(n)
	loc := Way{-1, 0}
	dir := Way{1, 0}
	num := 0
	for _, step := range steps(n) {
		for j := 0; j < step; j++ {
			loc = loc.walk(dir)
			mat.set(loc, num)
			num++
		}
		dir = Rect.turn(dir)
	}
	return mat
}

func main() {
	fmt.Println(run(6))
}
