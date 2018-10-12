package main

import "fmt"

type node struct {
	key  int
	next *node
}

var head *node = nil
var tail *node = nil

func insert_node(n int) {
	var new_node node = node{
		key:  n,
		next: nil,
	}

	if head == nil {
		head = &new_node
		tail = &new_node
	} else {
		tail.next = &new_node
		tail = &new_node
	}
}

func delete_node() int {
	if head == nil {
		return -1
	}

	key := head.key
	head = head.next

	if head == nil {
		tail = nil
	}
	return key
}

func main() {
	insert_node(3)
	insert_node(4)
	insert_node(5)

	fmt.Println(delete_node())
	fmt.Println(delete_node())
	fmt.Println(delete_node())
	fmt.Println(delete_node())
}
