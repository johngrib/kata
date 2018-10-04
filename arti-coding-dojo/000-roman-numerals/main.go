package main

import (
	"fmt"
	"strings"
)

type convert func(int) int

func calc(symbol string, symbolNumber int, inputNumber int) int {
	count := inputNumber / symbolNumber
	fmt.Print(strings.Repeat(symbol, count))
	return inputNumber % symbolNumber
}

func roman(symbol string, symbolNumber int) convert {
	return func(inputNumber int) int {
		return calc(symbol, symbolNumber, inputNumber)
	}
}

var setting = []convert{
	roman("M", 1000),
	roman("CM", 900),
	roman("D", 500),
	roman("CD", 400),
	roman("C", 100),
	roman("XC", 90),
	roman("L", 50),
	roman("XL", 40),
	roman("X", 10),
	roman("IX", 9),
	roman("V", 5),
	roman("IV", 4),
	roman("I", 1),
	func(inputNumber int) int {
		fmt.Println("")
		return inputNumber
	},
}

func printRoman(inputNumber int) {
	res := inputNumber
	for _, belt := range setting {
		res = belt(res)
	}
}
