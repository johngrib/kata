package Div2_Level2;

import org.junit.Test;

import static org.junit.Assert.*;

public class InterestingDigitsTest {

    InterestingDigits d = new InterestingDigits();

    /**
     * All other candidate digits fail for base=10.
     * For example, 2 and 5 both fail on 100, for which 1+0+0=1.
     * Similarly, 4 and 8 both fail on 216, for which 2+1+6=9, and 6 and 7 both fail for 126, for which 1+2+6=9.
     */
    @Test
    public void example0() {
        assertArrayEquals(d.digits(10), new int[]{3, 9});
    }

    @Test
    public void example1() {
        assertArrayEquals(d.digits(3), new int[]{2});
    }

    @Test
    public void example2() {
        assertArrayEquals(d.digits(9), new int[]{2, 4, 8});
    }

    @Test
    public void example3() {
        assertArrayEquals(d.digits(26), new int[]{5, 25});
    }

    @Test
    public void example4() {
        assertArrayEquals(d.digits(30), new int[]{29});
    }
}
