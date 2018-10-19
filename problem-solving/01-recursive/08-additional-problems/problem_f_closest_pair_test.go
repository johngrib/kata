package main

import (
	"fmt"
	"math"
)

func ExampleClosestPair() {

	list := []point{
		point{0, 2},
		point{6, 67},
		point{43, 71},
		point{32, 107},
		point{189, 140},
	}
	fmt.Println(minDistancePair(list))
	fmt.Println(bruteForce(list, math.MaxFloat64))

	// Output:
	// {{6 67} {43 71} 37.21558813185679}
	// {{6 67} {43 71} 37.21558813185679}
}
