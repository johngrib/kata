package Div2_Level1;

/**
 * SRM478 Div2 Level1, Point 250
 *
 * @SuccessRate 97.04 %
 * @Categories Simulation
 * @Search https://community.topcoder.com/tc?module=ProblemArchive&sr=&er=&sc=&sd=&class=kiwijuiceeasy&cat=&div1l=&div2l=1&mind1s=&mind2s=&maxd1s=&maxd2s=&wr=
 * @Statement https://community.topcoder.com/stat?c=problem_statement&pm=11020
 * @Arena https://arena.topcoder.com/#/u/practiceCode/14359/13281/11020/2/305508
 */
public class KiwiJuiceEasy {

    public int[] thePouring(int[] capacities, int[] bottles, int[] fromId, int[] toId) {

        for (int i = 0; i < fromId.length; i++) {

            final int from = fromId[i];
            final int to = toId[i];
            final int pour = Math.min(bottles[from], capacities[to] - bottles[to]);

            bottles[from] -= pour;
            bottles[to] += pour;
        }
        return bottles;
    }
}
