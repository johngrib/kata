package Div2_Level1;

import java.util.Arrays;

/**
 * SRM480 Div2 Level1, Point 250
 *
 * @SuccessRate 95.06 %
 * @Categories Encryption/Compression, Math, Sorting
 * @Search https://community.topcoder.com/tc?module=ProblemArchive&sr=&er=&sc=&sd=&class=cryptography&cat=&div1l=&div2l=1&mind1s=&mind2s=&maxd1s=&maxd2s=&wr=
 * @Statement https://community.topcoder.com/stat?c=problem_statement&pm=10814
 * @Arena https://arena.topcoder.com/#/u/practiceCode/14365/11262/10814/2/305685
 */
public class Cryptography {

    public long encrypt(int[] numbers) {
        Arrays.sort(numbers);
        numbers[0] += 1;
        return multiply(numbers);
    }

    private long multiply(int[] numbers) {
        long result = 1L;
        for (int i = 0; i < numbers.length; i++) {
            result *= numbers[i];
        }
        return result;
    }
}
