package Div2_Level1;

import org.junit.Test;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;

public class InterestingPartyTest {

    InterestingParty party = new InterestingParty();

    /**
     * This is a very easy case since everybody is interested in "fishing".
     */
    @Test
    public void example0() {
        final String[] first = new String[]{"fishing", "gardening", "swimming", "fishing"};
        final String[] second = new String[]{"hunting", "fishing", "fishing", "biting"};
        assertThat(party.bestInvitation(first, second), is(4));
    }

    /**
     * Despite being interested in "talking", "speaking", "meeting" and so on,
     * these people have nothing to talk about with each other.
     */
    @Test
    public void example1() {
        final String[] first = new String[]{"variety", "diversity", "loquacity", "courtesy"};
        final String[] second = new String[]{"talking", "speaking", "discussion", "meeting"};
        assertThat(party.bestInvitation(first, second), is(1));
    }

    /**
     * Mr. White can invite friends 0, 1, 3 (0-based) and they will have an interesting evening talking about "python"
     * (or at least Mr. White thinks so).
     */
    @Test
    public void example2() {
        final String[] first = new String[]{"snakes", "programming", "cobra", "monty"};
        final String[] second = new String[]{"python", "python", "anaconda", "python"};
        assertThat(party.bestInvitation(first, second), is(3));
    }

    @Test
    public void example3() {
        final String[] first = new String[]{"t", "o", "p", "c", "o", "d", "e", "r", "s", "i", "n", "g", "l", "e", "r",
                "o", "u", "n", "d", "m", "a", "t", "c", "h", "f", "o", "u", "r", "n", "i"};
        final String[] second = new String[]{"n", "e", "f", "o", "u", "r", "j", "a", "n", "u", "a", "r", "y", "t", "w",
                "e", "n", "t", "y", "t", "w", "o", "s", "a", "t", "u", "r", "d", "a", "y"};
        assertThat(party.bestInvitation(first, second), is(6));
    }
}
