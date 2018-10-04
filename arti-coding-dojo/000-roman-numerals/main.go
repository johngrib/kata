package main

import "strings"

type Number struct {
	exp           string
	value, remain int
}
type Converter func(Number) Number

func calc(config Number, input Number) Number {
	count := input.remain / config.value
	input.exp = input.exp + strings.Repeat(config.exp, count)
	input.remain = input.remain % config.value
	return input
}

func trans(symbol string, symbolNumber int) Converter {

	config := Number{exp: symbol, value: symbolNumber}

	return func(input Number) Number {
		return calc(config, input)
	}
}

var conveyorBelt = []Converter{
	trans("M", 1000),
	trans("CM", 900),
	trans("D", 500),
	trans("CD", 400),
	trans("C", 100),
	trans("XC", 90),
	trans("L", 50),
	trans("XL", 40),
	trans("X", 10),
	trans("IX", 9),
	trans("V", 5),
	trans("IV", 4),
	trans("I", 1),
}

func printRoman(inputNumber int) string {

	num := Number{exp: "", value: inputNumber, remain: inputNumber}

	for _, chain := range conveyorBelt {
		if num.remain < 1 {
			return num.exp
		}
		num = chain(num)
	}
	return num.exp
}
