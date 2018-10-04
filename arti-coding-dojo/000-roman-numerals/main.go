package main

import (
	"strings"
)

type convert func(int, string) (int, string)

func calc(symbol string, symbolNumber int, inputNumber int, inputStr string) (int, string) {
	count := inputNumber / symbolNumber
	remain := inputNumber % symbolNumber
	result := inputStr + strings.Repeat(symbol, count)
	return remain, result
}

func roman(symbol string, symbolNumber int) convert {
	return func(inputNumber int, inputStr string) (int, string) {
		return calc(symbol, symbolNumber, inputNumber, inputStr)
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
}

func printRoman(inputNumber int) string {
	remain := inputNumber
	result := ""
	for _, belt := range setting {
		if remain < 1 {
			return result
		}
		remain, result = belt(remain, result)
	}
	return result
}
