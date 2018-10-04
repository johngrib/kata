package main

import "bufio"
import "fmt"
import "os"

func main() {

	scanner := bufio.NewScanner(os.Stdin)

	var text string

	fmt.Println("What is the quote?")
	if scanner.Scan() {
		text = scanner.Text()
	}

	var person string

	fmt.Println("Who said it?")
	if scanner.Scan() {
		person = scanner.Text()
	}

	fmt.Println(person + ` says, "` + text + `"`)

}
