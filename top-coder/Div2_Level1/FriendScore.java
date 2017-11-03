package Div2_Level1;

/**
 * SRM436 Div2 Level1, Point 250
 *
 * @SuccessRate 61.02 %
 * @Categories Graph Theory
 * @Search https://community.topcoder.com/tc?module=ProblemArchive&sr=&er=&sc=&sd=&class=friendscore&cat=&div1l=&div2l=1&mind1s=&mind2s=&maxd1s=&maxd2s=&wr=
 * @Statement https://community.topcoder.com/stat?c=problem_statement&pm=10343
 * @Arena https://arena.topcoder.com/#/u/practiceCode/13785/9172/10343/2/300637
 */
public class FriendScore {

    public int highestScore(String[] friends) {

        int[][] friend1 = new int[friends.length][friends.length];
        int[][] friend2 = new int[friends.length][friends.length];

        for (int i = 0; i < friend1.length; i++) {
            for (int j = 0; j < friend1[i].length; j++) {
                friend1[i][j] = ('Y' == friends[i].charAt(j)) ? 1 : 0;
                friend2[i][j] = friend1[i][j];
            }
        }

        // check 2 tier friends
        for (int i = 0; i < friend1.length; i++) {
            for (int j = 0; j < friend1[i].length; j++) {
                if(friend1[i][j] > 0) {
                    int[] friend = friend1[j];
                    for (int k = 0; k < friend.length; k++) {
                        friend2[i][k] = friend2[i][k] + friend[k];
                    }
                }
            }
        }

        return getMaxCount(friend2);
    }

    private int getMaxCount(int[][] friend2) {
        int count = 0;
        for (int i = 0; i < friend2.length; i++) {
            int tempCount = 0;
            for (int j = 0; j < friend2[i].length; j++) {
                if(friend2[i][j] > 0) {
                    tempCount++;
                }
            }
            if(tempCount > count) {
                count = tempCount - 1;
            }
        }
        return count;
    }
}
