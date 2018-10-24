package main

import "sort"
import "strconv"
import "strings"

type Item struct {
	name, value, weight int
}

type Sack struct {
	items    []Item
	capacity int
	weight   int
	value    int
}

func (s Sack) New(capacity int) Sack {
	return Sack{[]Item{}, capacity, 0, 0}
}

func (s Sack) Put(i Item) Sack {
	if s.Remain() < i.weight {
		return s
	}
	s.items = append(s.items, i)
	s.weight += i.weight
	s.value += i.value
	return s
}

func (s Sack) Remain() int {
	return s.capacity - s.weight
}

func (s Sack) String() string {

	names := []int{}
	for _, item := range s.items {
		names = append(names, item.name)
	}
	sort.Ints(names)

	list := []string{}
	for _, name := range names {
		list = append(list, strconv.Itoa(name))
	}
	msg := "{" + strings.Join(list, ",") + "} " + strconv.Itoa(s.value)
	return msg
}

func putSimulation(set []Item, s Sack) Sack {
	if len(set) < 1 {
		return s
	}
	rs := make(chan Sack, 2)

	go func() {
		rs <- putSimulation(set[1:], s.Put(set[0]))
	}()
	go func() {
		rs <- putSimulation(set[1:], s)
	}()

	s1 := <-rs
	s2 := <-rs

	if s1.value > s2.value {
		return s1
	}
	return s2
}
