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

var _ = Describe("twoSum", func() {
	It("basic", func() {
		result := twoSum([]int{2, 7, 11, 15}, 9)
		Expect(result).To(Equal([]int{0, 1}))
	})
	It("custom", func() {
		result := twoSum([]int{3, 3}, 6)
		Expect(result).To(Equal([]int{0, 1}))
	})
})
