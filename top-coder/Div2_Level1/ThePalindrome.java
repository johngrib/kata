package Div2_Level1;

/**
 * SRM428 Div2 Level1, Point 250
 *
 * @SuccessRate 71.84 %
 * @Categories Dynamic Programming
 * @Search https://community.topcoder.com/tc?module=ProblemArchive&sr=&er=&sc=&sd=&class=thepalindrome&cat=&div1l=&div2l=1&mind1s=&mind2s=&maxd1s=&maxd2s=&wr=
 * @Statement https://community.topcoder.com/stat?c=problem_statement&pm=10182
 * @Arena https://arena.topcoder.com/#/u/practiceCode/13690/9026/10182/2/299600
 */
public class ThePalindrome {

    public int find(String s) {

        String sentence = s;
        String reversed = reverse(sentence);
        int count = 0;

        while (!sentence.equals(reversed)) {
            sentence = sentence.substring(1);
            reversed = reversed.substring(0, reversed.length() - 1);
            count++;
        }
        return count + s.length();
    }

    private String reverse(String s) {
        return new StringBuffer(s).reverse().toString();
    }
}
