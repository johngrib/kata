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

var _ = Describe("", func() {
	It("", func() {
		Expect(combination(3, 1)).To(Equal(3))
		Expect(combination(30, 10)).To(Equal(30045015))
		Expect(combination(20, 10)).To(Equal(184756))
		Expect(combination(50, 20)).To(Equal(47129212243960))
	})
})
