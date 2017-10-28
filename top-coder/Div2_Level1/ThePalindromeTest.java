package Div2_Level1;

import org.junit.Test;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;

public class ThePalindromeTest {

    final ThePalindrome t = new ThePalindrome();

    /**
     * "ababa" is the shortest palindrome that John can get.
     */
    @Test
    public void example0() {
        assertThat(t.find("abab"), is(5));
    }

    /**
     * Already a palindrome.
     */
    @Test
    public void example1() {
        assertThat(t.find("abacaba"), is(7));
    }

    /**
     * All characters are different.
     */
    @Test
    public void example2() {
        assertThat(t.find("qwerty"), is(11));
    }

    @Test
    public void example3() {
        assertThat(t.find("abdfhdyrbdbsdfghjkllkjhgfds"), is(38));
    }
}
