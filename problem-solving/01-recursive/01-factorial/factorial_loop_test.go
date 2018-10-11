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

var _ = Describe("factorialLoop", func() {
	It("", func() {
		Expect(factorialLoop(4)).To(Equal(4 * 3 * 2 * 1))
	})
})

var _ = Describe("factorial", func() {
	It("", func() {
		Expect(factorial(4)).To(Equal(4 * 3 * 2 * 1))
	})
})
