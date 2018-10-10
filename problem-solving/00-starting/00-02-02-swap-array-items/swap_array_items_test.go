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

var _ = Describe("swap_arr", func() {
	It("swap items", func() {
		arr := []int{1, 2, 3, 4, 5}
		swap_arr(arr, 0, 4)
		Expect(arr[0]).To(Equal(5))
		Expect(arr[4]).To(Equal(1))
	})
})
