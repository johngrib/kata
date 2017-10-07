#!/usr/bin/env perl6
use v6;

my $max = -1;
for (1..99) -> $a {
    for (1..100) -> $b {
        my $sum = [+] ($a ** $b).split('');
        $max = $sum if $sum > $max;
    }
}

say $max;
