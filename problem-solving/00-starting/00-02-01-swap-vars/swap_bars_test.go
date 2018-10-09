package main

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("swap", func() {
	It("change value of two variables", func() {
		a := 3
		b := 10
		swap(&a, &b)
		Expect(a).To(Equal(10))
		Expect(b).To(Equal(3))
	})
})
