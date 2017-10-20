package Div2_Level1;

import java.util.*;

/**
 * SRM494 Div2 Level1, Point 250
 *
 * @SuccessRate 88.26 %
 * @Categories Greedy, Simple Search, Iteration
 * @Search https://community.topcoder.com/tc?module=ProblemArchive&sr=&er=&sc=&sd=&class=interestingparty&cat=&div1l=&div2l=1&mind1s=&mind2s=&maxd1s=&maxd2s=&wr=
 * @Statement https://community.topcoder.com/stat?c=problem_statement&pm=11312
 * @Arena https://arena.topcoder.com/#/u/practiceCode/14480/15196/11312/2/307028
 */
public class InterestingParty {
    public int bestInvitation(String[] first, String[] second) {

        final Map<String, Integer> map = new HashMap<>();

        for (int i = 0; i < first.length; i++) {
            map.put(first[i], 0);
            map.put(second[i], 0);
        }

        for (int i = 0; i < first.length; i++) {
            map.put(first[i], map.get(first[i]) + 1);
            map.put(second[i], map.get(second[i]) + 1);
        }

        final Iterator<Integer> it = map.values().iterator();
        int max = 0;

        while (it.hasNext()) {
            max = Math.max(max, it.next());
        }

        return max;
    }
}
