object Euler {
  def main(args: Array[String]) {

    val start = 1                 // 1901년 1월 1일의 인덱스. 이 날은 화요일이다.
    val end = 365 * 100 + 100 / 4 // 2000년 12월 31일의 인덱스. 윤년이 100 / 4 만큼 있으므로 추가로 더해준다
    val month = List(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); // 평년인 경우
    val leapM = List(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); // 윤년인 경우
    val year = month ::: month ::: month ::: leapM

    def calc(today: Int, month: List[Int], countSunday: Int): Int = {

      if (today > end) return countSunday

      val isSunday: Boolean = today % 7 == 6
      val mList = if (month.length < 1) year else month
      calc(today + mList.head, mList.tail, countSunday + (if (isSunday) 1 else 0))  // 재귀
    }
    println(calc(start, year, 0))
  }
}
