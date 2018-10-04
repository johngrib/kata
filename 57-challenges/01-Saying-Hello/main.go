package main

import "bufio"
import "fmt"
import "os"

func ask() {
	fmt.Print("What is your name? ")
}

func userInput() string {

	scanner := bufio.NewScanner(os.Stdin)

	if scanner.Scan() {
		return scanner.Text()
	}
	return ""
}

func hello(name string) {
	fmt.Printf("Hello, %s, nice to meet you!", name)
}

func main() {
	ask()
	hello(userInput())
}
