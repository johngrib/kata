package Div2_Level2;

/**
 * SRM425 Div2 Level2, Point 500
 *
 * @SuccessRate 74.07 %
 * @Categories Brute Force, Simple Search, Iteration
 * @Search https://community.topcoder.com/tc?module=ProblemArchive&sr=&er=&sc=&sd=&class=crazybot&cat=&div1l=&div2l=2&mind1s=&mind2s=&maxd1s=&maxd2s=&wr=
 * @Statement https://community.topcoder.com/stat?c=problem_statement&pm=10095
 * @Arena https://arena.topcoder.com/#/u/practiceCode/13671/8963/10095/2/299318
 */
public class CrazyBot {

    private final int EAST = 0;
    private final int WEST = 1;
    private final int SOUTH = 2;
    private final int NORTH = 3;
    private final int[] DIRECTION = new int[]{EAST, WEST, SOUTH, NORTH};

    private boolean[][] grid = new boolean[40][40];
    private int xx[] = {1, -1, 0, 0};
    private int yy[] = {0, 0, 1, -1};

    private double[] prob = new double[4];

    public double getProbability(int n, int east, int west, int south, int north) {
        prob[EAST] = east / 100.0d;
        prob[WEST] = west / 100.0d;
        prob[SOUTH] = south / 100.0d;
        prob[NORTH] = north / 100.0d;

        return dfs(20, 20, n);
    }

    private double dfs(int x, int y, int n) {

        if (grid[x][y])
            return 0;

        if (n == 0)
            return 1;

        grid[x][y] = true;

        double result = 0;
        for (final int dir : DIRECTION) {
            result += dfs(x + xx[dir], y + yy[dir], n - 1) * prob[dir];
        }

        grid[x][y] = false;
        return result;
    }
}
