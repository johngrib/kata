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

var _ = Describe("right_rotate", func() {
	It("rotates array", func() {
		arr := []int{
			1, 2, 3, 4, 5, 6, 7, 8,
		}
		right_rotate(arr, 2, 6)
		expect := []int{
			1, 2, 7, 3, 4, 5, 6, 8,
		}
		Expect(arr).To(Equal(expect))
	})
})
