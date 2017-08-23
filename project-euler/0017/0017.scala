object Euler {
  def main(args: Array[String]) {

    val dict = Map[Int, String](
      1 -> "one",   11 -> "eleven",   10 -> "ten",
      2 -> "two",   12 -> "twelve",   20 -> "twenty",
      3 -> "three", 13 -> "thirteen", 30 -> "thirty",
      4 -> "four",  14 -> "fourteen", 40 -> "forty",
      5 -> "five",  15 -> "fifteen",  50 -> "fifty",
      6 -> "six",   16 -> "sixteen",  60 -> "sixty",
      7 -> "seven", 17 -> "seventeen",70 -> "seventy",
      8 -> "eight", 18 -> "eighteen", 80 -> "eighty",
      9 -> "nine",  19 -> "nineteen", 90 -> "ninety",
      100 -> "hundred", 1000 -> "onethousand").toList.map((x) => (x._1, x._2.length)).toMap

    def getNumberLength(n: Int): Int = {
      if (n == 1000) return dict(n)

      val (xoo, oxo, oox, oxx) = ((n % 1000) / 100, (n % 100) / 10, n % 10, n % 100)

      val pre =
        if (xoo > 0) 
          dict(xoo) + dict(100) + (if (oxx > 0) 3 else 0) // 100 의 자리 숫자 표현 + and
        else 0

      val post =
        if (oxx <= 20 && oxx > 0)                         // 1~20 표현
          dict(oxx)
        else if (oxx > 20)                                // 20 보다 큰 경우 표현
          dict(oxo * 10) + (if(oox > 0) dict(oox) else 0)
        else 0

      pre + post
    }

    val rs2 = (1 to 1000).toList.map(getNumberLength _).sum
    println(rs2)
  }
}
