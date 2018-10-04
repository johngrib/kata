package main

import "bufio"
import "fmt"

import "os"
import "unicode/utf8"

func strLength(str string) int {
	return utf8.RuneCountInString(str)
}

func main() {
	fmt.Print("What is the input string? ")

	scanner := bufio.NewScanner(os.Stdin)
	var input string = ""

	if scanner.Scan() {
		input = scanner.Text()
	}

	fmt.Printf("%s has %d characters", input, strLength(input))
}
