package main

func ExampleBracket() {

	n := 3
	arr := make([]int, n*2, n*2)
	paren(n, 0, arr, 0)

	// Output:
	//((()))
	//(()())
	//(())()
	//()(())
	//()()()
}

func ExampleBracket4() {

	n := 4
	arr := make([]int, n*2, n*2)
	paren(n, 0, arr, 0)
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
