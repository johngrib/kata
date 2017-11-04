package Div2_Level2;

import org.junit.Test;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;

public class CrazyBotTest {

    final CrazyBot c = new CrazyBot();

    /**
     * The robot only takes one step, so it never visits a point more than once.
     */
    @Test
    public void example0() {
        assertThat(c.getProbability(1, 25, 25, 25, 25), is(1.0d));
    }

    /**
     * The robot will visit its starting point twice only if the two moves are in opposite directions.
     */
    @Test
    public void example1() {
        assertThat(c.getProbability(2, 25, 25, 25, 25), is(0.75d));
    }

    /**
     * Here, the only possible directions are north and east, so the robot will never visit the same point twice.
     */
    @Test
    public void example2() {
        assertThat(c.getProbability(7, 50, 0, 0, 50), is(1.0d));
    }

    /**
     * Here, the only possible directions are east and west.
     * The only two available paths are "EEEEEEEEEEEEEE" and "WWWWWWWWWWWWWW". The probability is equal to 2 / (2^14).
     */
    @Test
    public void example3() {
        assertThat(c.getProbability(14, 50, 50, 0, 0), is(1.220703125E-4));
    }

    /**
     * The probability is quite small for n=14.
     */
    @Test
    public void example4() {
        assertThat(c.getProbability(14, 25, 25, 25, 25), is(0.008845493197441101));
    }
}
