package Div2_Level2;

import java.util.LinkedList;
import java.util.Queue;

/**
 * SRM453.5 Div2 Level2, Point 500
 *
 * @SuccessRate 66.59 %
 * @Categories Search
 * @Search https://community.topcoder.com/tc?module=ProblemArchive&sr=&er=&sc=&sd=&class=mazemaker&cat=&div1l=&div2l=2&mind1s=&mind2s=&maxd1s=&maxd2s=&wr=
 * @Statement https://community.topcoder.com/stat?c=problem_statement&pm=10451
 * @Arena https://arena.topcoder.com/#/u/practiceCode/14178/9340/10451/2/302911
 */
public class MazeMaker {

    public int longestPath(String[] maze, int startRow, int startCol, int[] moveRow, int[] moveCol) {

        int max = 0;
        final Maze m = new Maze(maze, startCol, startRow);

        final Queue<Location> queue = new LinkedList<>();
        queue.add(Location.get(startCol, startRow));

        while (!queue.isEmpty()) {
            final Location loc = queue.poll();

            for (int i = 0; i < moveRow.length; i++) {
                int nextY = loc.y + moveRow[i];
                int nextX = loc.x + moveCol[i];

                if (m.isIn(nextX, nextY)
                        && m.board[nextY][nextX] == -1
                        && maze[nextY].charAt(nextX) == '.'
                        ) {
                    m.board[nextY][nextX] = m.board[loc.y][loc.x] + 1;
                    queue.add(Location.get(nextX, nextY));
                }
            }
        }

        for (int i = 0; i < m.height; i++) {
            for (int j = 0; j < m.width; j++) {
                if (maze[i].charAt(j) == '.' && m.board[i][j] == -1) {
                    return -1;
                }
                max = Math.max(max, m.board[i][j]);
            }
        }

        return max;
    }

    private static class Location {
        final int x, y;

        Location(int x, int y) {
            this.x = x;
            this.y = y;
        }

        private static Location get(int x, int y) {
            return new Location(x, y);
        }
    }

    private class Maze {
        final String[] maze;
        final int width, height, startCol, startRow;
        final int[][] board;

        Maze(String[] maze, int startCol, int startRow) {
            this.maze = maze;
            this.width = maze[0].length();
            this.height = maze.length;
            this.board = new int[height][width];
            this.startCol = startCol;
            this.startRow = startRow;
            initBoard();
        }

        private void initBoard() {
            for (int i = 0; i < height; i++) {
                for (int j = 0; j < width; j++) {
                    board[i][j] = -1;
                }
            }
            board[startRow][startCol] = 0;
        }

        boolean isIn(int x, int y) {
            return (0 <= x && x < width) && (0 <= y && y < height);
        }
    }
}
