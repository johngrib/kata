package main

import (
	"math"
	"sort"
)

type point struct{ x, y float64 }

type pair struct {
	a        point
	b        point
	distance float64
}

func distance(a, b point) float64 {
	return math.Sqrt(math.Pow(a.x-b.x, 2) + math.Pow(a.y-b.y, 2))
}

func divide(list []point) pair {
	if len(list) <= 1 {
		return pair{point{}, point{}, math.MaxFloat64}
	}
	mid := len(list) / 2
	leftMin := divide(list[:mid])
	rightMin := divide(list[mid:])
	return conquer(list, math.Min(leftMin.distance, rightMin.distance))
}

func collectPoints(list []point, filter func(point) bool) []point {
	var result []point
	for _, p := range list {
		if filter(p) {
			result = append(result, p)
		}
	}
	return result
}

func conquer(list []point, min float64) pair {
	mid := len(list) / 2
	center := (list[mid-1].x + list[mid].x) / 2
	left := center - min
	right := center + min

	centerPoints := collectPoints(list, func(p point) bool {
		return left <= p.x && p.x <= right
	})
	return bruteForce(centerPoints, min)
}

func bruteForce(list []point, min float64) pair {
	var points pair = pair{point{}, point{}, math.MaxFloat64}
	for i, _ := range list {
		for j := i + 1; j < len(list); j++ {
			dist := distance(list[i], list[j])
			if dist < min {
				min = dist
				points = pair{list[i], list[j], dist}
			}
		}
	}
	return points
}

func minDistancePair(list []point) pair {
	sort.Slice(list, func(i, j int) bool {
		return list[i].x < list[j].x
	})
	return divide(list)
}
