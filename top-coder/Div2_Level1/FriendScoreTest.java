package Div2_Level1;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class FriendScoreTest {

    final FriendScore f = new FriendScore();

    /**
     * Here, there are 3 people and none of them are friends, so everybody has zero 2-friends.
     */
    @Test
    public void example0() {
        assertThat(f.highestScore(new String[]{"NNN",
                "NNN",
                "NNN"}), is(0));
    }

    /**
     * Each person has two 2-friends.
     */
    @Test
    public void example1() {
        assertThat(f.highestScore(new String[]{"NYY",
                "YNY",
                "YYN"}), is(2));
    }

    /**
     * Persons 0 and 4 have two 2-friends, persons 1 and 3 have three 2-friends. Person 2 is the most popular one - four 2-friends.
     */
    @Test
    public void example2() {
        assertThat(f.highestScore(new String[]{"NYNNN",
                "YNYNN",
                "NYNYN",
                "NNYNY",
                "NNNYN"}), is(4));
    }

    @Test
    public void example3() {
        assertThat(f.highestScore(new String[]{"NNNNYNNNNN",
                "NNNNYNYYNN",
                "NNNYYYNNNN",
                "NNYNNNNNNN",
                "YYYNNNNNNY",
                "NNYNNNNNYN",
                "NYNNNNNYNN",
                "NYNNNNYNNN",
                "NNNNNYNNNN",
                "NNNNYNNNNN"}), is(8));
    }

    @Test
    public void example4() {
        assertThat(f.highestScore(new String[]{"NNNNNNNNNNNNNNY",
                "NNNNNNNNNNNNNNN",
                "NNNNNNNYNNNNNNN",
                "NNNNNNNYNNNNNNY",
                "NNNNNNNNNNNNNNY",
                "NNNNNNNNYNNNNNN",
                "NNNNNNNNNNNNNNN",
                "NNYYNNNNNNNNNNN",
                "NNNNNYNNNNNYNNN",
                "NNNNNNNNNNNNNNY",
                "NNNNNNNNNNNNNNN",
                "NNNNNNNNYNNNNNN",
                "NNNNNNNNNNNNNNN",
                "NNNNNNNNNNNNNNN",
                "YNNYYNNNNYNNNNN"}), is(6));
    }
}
