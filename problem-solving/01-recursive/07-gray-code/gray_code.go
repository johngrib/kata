package main

import (
	"fmt"
	"math"
	"strconv"
)

func printNbitGrayCode(n int) {

	limit := int(math.Pow(2.0, float64(n)))
	format := "%0" + strconv.Itoa(n) + "b\n"

	for i := 0; i < limit; i++ {
		g := i ^ (i >> 1)
		fmt.Printf(format, g)
	}
}

func toGrayCode(bin int) int {
	return bin ^ (bin >> 1)
}

func toBin(gray int) int {

	bitLength := 1 + int(math.Log2(float64(gray)))

	for i := 0; i < bitLength; i++ {
		gray ^= (gray >> uint(i))
	}

	return gray
}
