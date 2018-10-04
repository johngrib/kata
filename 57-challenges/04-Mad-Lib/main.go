package main

import "fmt"

func getValue(ask string, str *string) {
	fmt.Print(ask + ": ")
	fmt.Scanln(str)
}

func main() {

	var noun, verb, adjective, adverb string

	getValue("Enter a noun", &noun)
	getValue("Enter a verb", &verb)
	getValue("Enter a adjective", &adjective)
	getValue("Enter a adverb", &adverb)

	fmt.Printf(`Do you %s your %s %s %s? That's hilarious!`,
		verb, adjective, noun, adverb)
}
