#!/usr/bin/env perl6
use v6;

my $limit = 10 ** 999;
my $count = 2;
my $num1 = 1;
my $num2 = 1;

while $num2 < $limit {
    my $num3 = $num1 + $num2;
    $num1 = $num2;
    $num2 = $num3;
    $count += 1;
}

say $count;
