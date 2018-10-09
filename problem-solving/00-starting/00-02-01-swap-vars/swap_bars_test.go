package main

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestGinkgo(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Tests Suite")
}

var _ = Describe("swap", func() {
	It("change value of two variables", func() {
		a := 3
		b := 10
		swap(&a, &b)
		Expect(a).To(Equal(10))
		Expect(b).To(Equal(3))
	})
})
