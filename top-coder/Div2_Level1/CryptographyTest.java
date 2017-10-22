package Div2_Level1;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;

public class CryptographyTest {

    final Cryptography c = new Cryptography();

    /**
     * If we increment the first number, we get 2*2*3 = 12.
     * If we increment the second, we get 1*3*3 = 9.
     * If we increment the third, we get 1*2*4 = 8.
     * Hence, the correct return value is 12.
     */
    @Test
    public void example0() {
        int[] numbers = new int[]{1,2,3};
        assertThat(c.encrypt(numbers), is(12L));
    }

    /**
     * The elements of numbers are not necessarily unique.
     */
    @Test
    public void example1() {
        int[] numbers = new int[]{1,3,2,1,1,3};
        assertThat(c.encrypt(numbers), is(36L));
    }

    /**
     * The answer may be very big, but will not exceed 2^62.
     */
    @Test
    public void example2() {
        int[] numbers = new int[]{1000,999,998,997,996,995};
        assertThat(c.encrypt(numbers), is(986074810223904000L));
    }

    @Test
    public void example3() {
        int[] numbers = new int[]{1,1,1,1};
        assertThat(c.encrypt(numbers), is(2L));
    }
}
