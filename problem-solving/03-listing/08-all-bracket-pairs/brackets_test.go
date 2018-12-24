package main

func ExampleBracket() {

	printParens(3)

	// Output:
	//((()))
	//(()())
	//(())()
	//()(())
	//()()()
}

func ExampleBracket4() {

	printParens(4)
	// Output:
	//(((())))
	//((()()))
	//((())())
	//((()))()
	//(()(()))
	//(()()())
	//(()())()
	//(())(())
	//(())()()
	//()((()))
	//()(()())
	//()(())()
	//()()(())
	//()()()()
}