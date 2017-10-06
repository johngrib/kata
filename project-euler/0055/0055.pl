#!/usr/bin/env perl6
use v6;

my sub isPalindrome($number) {
    $number == $number.flip;
}
my sub isLychrel($number) {
    my $num = $number;
    for (1..50) {
        my $next = $num + $num.flip;
        return False if isPalindrome($next);
        $num = $next;
    }
    return True;
}
my @lychrel = gather for reverse(1..10000) {
    take $_ if isLychrel($_);
}
say @lychrel.elems;
