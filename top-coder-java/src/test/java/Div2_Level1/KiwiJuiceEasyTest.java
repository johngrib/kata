package Div2_Level1;

import org.junit.Test;
import static org.junit.Assert.*;

/**
 * Created by johngrib on 2017. 10. 9..
 */
public class KiwiJuiceEasyTest {

    final KiwiJuiceEasy k = new KiwiJuiceEasy();

    /**
     * He pours kiwi juice from bottle 0 to bottle 1.
     * After pouring, bottle 0 will become empty and bottle 1 will contain 13 liters of kiwi juice.
     */
    @Test
    public void example0() {
        int[] capacities = new int[]{20, 20};
        int[] bottles = new int[]{5, 8};
        int[] fromId = new int[]{0};
        int[] toId = new int[]{1};

        int[] result = k.thePouring(capacities, bottles, fromId, toId);
        int[] expect = new int[]{0, 13};

        assertArrayEquals(expect, result);
    }

    /**
     * He will stop pouring when bottle 1 becomes full.
     */
    @Test
    public void example1() {
        int[] capacities = new int[]{10, 10};
        int[] bottles = new int[]{5, 8};
        int[] fromId = new int[]{0};
        int[] toId = new int[]{1};

        int[] result = k.thePouring(capacities, bottles, fromId, toId);
        int[] expect = new int[]{3, 10};

        assertArrayEquals(expect, result);
    }

    @Test
    public void example2() {
        int[] capacities = new int[]{30, 20, 10};
        int[] bottles = new int[]{10, 5, 5};
        int[] fromId = new int[]{0, 1, 2};
        int[] toId = new int[]{1, 2, 0};

        int[] result = k.thePouring(capacities, bottles, fromId, toId);
        int[] expect = new int[]{10, 10, 0};

        assertArrayEquals(expect, result);
    }

    @Test
    public void example3() {
        int[] capacities = new int[]{14, 35, 86, 58, 25, 62};
        int[] bottles = new int[]{6, 34, 27, 38, 9, 60};
        int[] fromId = new int[]{1, 2, 4, 5, 3, 3, 1, 0};
        int[] toId = new int[]{0, 1, 2, 4, 2, 5, 3, 1};

        int[] result = k.thePouring(capacities, bottles, fromId, toId);
        int[] expect = new int[]{0, 14, 65, 35, 25, 35};

        assertArrayEquals(expect, result);
    }

    @Test
    public void example4() {
        int[] capacities = new int[]{700000, 800000, 900000, 1000000};
        int[] bottles = new int[]{478478, 478478, 478478, 478478};
        int[] fromId = new int[]{2, 3, 2, 0, 1};
        int[] toId = new int[]{0, 1, 1, 3, 2};

        int[] result = k.thePouring(capacities, bottles, fromId, toId);
        int[] expect = new int[]{0, 156956, 900000, 856956 };

        assertArrayEquals(expect, result);
    }
}
