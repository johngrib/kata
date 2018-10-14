package main

import "fmt"

func ExampleCount() {
	rs1 := count(uint64(5), uint64(2))
	fmt.Println(rs1)

	rs2 := count(uint64(5), uint64(3))
	fmt.Println(rs2)

	fmt.Println(count(uint64(200), uint64(200)))
	// Output:
	// 3
	// 5
	// 3972999029388

}
