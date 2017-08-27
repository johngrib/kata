object Euler {
  def main(args: Array[String]) {

    // a * 9! + b * 8! + c * 7! + .... 이 1,000,000 에 접근하게 하면 됨 

    // 팩토리얼 계산 함수
    def getFactorial(num: Int, result: Int): Int =
      if (num <= 1) result
      else getFactorial(num - 1, result * num)

    // count + 1 번째 숫자를 찾아내는 함수
    def calc(seq: Int, remain: List[Int], result: List[Int]): String =
      if (remain.length < 1)
        result.mkString
      else {
        val num = getFactorial(remain.length - 1, 1) // 이 숫자가 현재 위치에 있을 경우 조합할 수 있는 숫자의 수
        val nextNumber = remain(seq / num)           // 위의 계산을 토대로 남아있는 수 중에서 몇 번째 수가 적합한지 선택한다 
        calc(seq % num, remain.filter(_ != nextNumber), result ::: List(nextNumber)) // 재귀
      }

    val rs = calc(1000000 - 1, (0 to 9).toList, List())
    println(rs)
  }
}
