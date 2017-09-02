#!/usr/bin/env perl6
use v6;

my %powerMap = ();

for (2..100) -> $a {
    for (2..100) -> $b {
        my $result = $a ** $b;
        %powerMap{$result} = True;
    }
}

my $length = %powerMap.keys + 0;

say $length;
