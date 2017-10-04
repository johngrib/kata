# Combinatoric selections
## Problem 53

### [Eng](https://projecteuler.net/problem=53)

There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5C3 = 10.

In general,

nCr = n! / (r!(n−r)!) ,where r ≤ n, n! = n×(n−1)×...×3×2×1, and 0! = 1.

It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.

How many, not necessarily distinct, values of  nCr, for 1 ≤ n ≤ 100, are greater than one-million?

### [Kor](http://euler.synap.co.kr/prob_detail.php?id=53)

1,2,3,4,5 다섯 숫자 중에서 세 개를 고르는 것에는 다음과 같은 10가지 경우가 있습니다.

123, 124, 125, 134, 135, 145, 234, 235, 245, 345

조합론이라는 분야에서는 이것을 5C3 = 10 이라고 표시하며, 일반적인 식은 아래와 같습니다.

nCr = n! / (r!(n−r)!),   단 r ≤ n 이고, n! = n×(n−1)×...×3×2×1 이며 0! = 1.

이 값은 n = 23 에 이르러서야 23C10 = 1144066 으로 처음 1백만을 넘게 됩니다.

1 ≤ n ≤ 100 일때 nCr의 값이 1백만을 넘는 경우는 모두 몇 번입니까? (단, 중복된 값은 각각 계산합니다)
