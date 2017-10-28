package Div2_Level2;

import java.util.ArrayList;

/**
 * SRM150 Div2 Level2, Point 500
 *
 * @SuccessRate 80.04 %
 * @Categories Simulation
 * @Search https://community.topcoder.com/tc?module=ProblemArchive&sr=&er=&sc=&sd=&class=InterestingDigits&cat=&div1l=&div2l=2&mind1s=&mind2s=&maxd1s=&maxd2s=&wr=
 * @Statement https://community.topcoder.com/stat?c=problem_statement&pm=1523
 * @Arena https://arena.topcoder.com/#/u/practiceCode/1262/1435/1523/2/1262
 */
public class InterestingDigits {

    public int[] digits(int base) {
        return getDivisorList(base - 1);
    }

    private int[] getDivisorList(int number) {
        final ArrayList<Integer> list = new ArrayList<>();
        for (int i = 2; i <= number; i++) {
            if (number % i == 0) {
                list.add(i);
            }
        }
        return list.stream().mapToInt(i -> i).toArray();
    }
}
