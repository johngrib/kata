package Div2_Level2;

import org.junit.Test;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;

public class MazeMakerTest {

    final MazeMaker m = new MazeMaker();

    /**
     * Here Jim can move up, down, left and right. Mike will set the exit in one of the bottom corners, which take Jim 3 steps to reach.
     */
    @Test
    public void example0() {
        String[] maze = new String[]{
                "...",
                "...",
                "..."
        };
        int startRow = 0;
        int startCol = 1;
        int[] moveRow = new int[]{1, 0, -1, 0};
        int[] moveCol = new int[]{0, 1, 0, -1};

        assertThat(m.longestPath(maze, startRow, startCol, moveRow, moveCol), is(3));
    }

    /**
     * This is the same problem, but now Jim can move diagonally. With this, he can reach any section in at most two steps.
     */
    @Test
    public void example1() {
        String[] maze = new String[]{
                "...",
                "...",
                "..."
        };
        int startRow = 0;
        int startCol = 1;
        int[] moveRow = new int[]{1, 0, -1, 0, 1, 1, -1, -1};
        int[] moveCol = new int[]{0, 1, 0, -1, 1, -1, 1, -1};

        assertThat(m.longestPath(maze, startRow, startCol, moveRow, moveCol), is(2));
    }

    /**
     * Here Mike can place the exit in the empty section of the bottom row; Jim can never reach it.
     */
    @Test
    public void example2() {
        String[] maze = new String[]{
                "X.X",
                "...",
                "XXX",
                "X.X"
        };
        int startRow = 0;
        int startCol = 1;
        int[] moveRow = new int[]{1, 0, -1, 0};
        int[] moveCol = new int[]{0, 1, 0, -1};

        assertThat(m.longestPath(maze, startRow, startCol, moveRow, moveCol), is(-1));
    }

    @Test
    public void example3() {
        String[] maze = new String[]{
                ".......",
                "X.X.X..",
                "XXX...X",
                "....X..",
                "X....X.",
                "......."
        };
        int startRow = 5;
        int startCol = 0;
        int[] moveRow = new int[]{1, 0, -1, 0, -2, 1};
        int[] moveCol = new int[]{0, -1, 0, 1, 3, 0};

        assertThat(m.longestPath(maze, startRow, startCol, moveRow, moveCol), is(7));
    }

    @Test
    public void example4() {
        String[] maze = new String[]{
                "......."
        };
        int startRow = 0;
        int startCol = 0;
        int[] moveRow = new int[]{1, 0, 1, 0, 1, 0};
        int[] moveCol = new int[]{0, 1, 0, 1, 0, 1};

        assertThat(m.longestPath(maze, startRow, startCol, moveRow, moveCol), is(6));
    }

    /**
     * Since Jim can only jump (and can't move to the side), Mike can place the exit anywhere except the start to prevent Jim from winning.
     */
    @Test
    public void example5() {
        String[] maze = new String[]{
                "..X.X.X.X.X.X."
        };
        int startRow = 0;
        int startCol = 0;
        int[] moveRow = new int[]{2, 0, -2, 0};
        int[] moveCol = new int[]{0, 2, 0, -2};

        assertThat(m.longestPath(maze, startRow, startCol, moveRow, moveCol), is(-1));
    }
}
