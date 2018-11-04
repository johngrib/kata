package main

func ExamplePermut() {

	printPermut(3, 2)
	// Output:
	//[0 1]
	//[0 2]
	//[1 0]
	//[1 2]
	//[2 1]
	//[2 0]

}

func ExamplePermut2() {

	printPermut(3, 3)
	// Output:
	// [0 1 2]
	// [0 2 1]
	// [1 0 2]
	// [1 2 0]
	// [2 1 0]
	// [2 0 1]
}
