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

var _ = Describe("max_arr", func() {
	It("returns max", func() {
		max, _ := max_arr([]int{1, 2, 3, 4})
		Expect(max).To(Equal(4))
	})

	Context("with array of length 0", func() {
		It("returns error", func() {
			max, err := max_arr([]int{})

			Expect(err).NotTo(BeNil())
			Expect(max).To(Equal(-1))
		})
	})
})
