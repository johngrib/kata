#!/usr/bin/env perl6
use v6;

my $beforeNumerator = 0;    # 분자
my $beforeDenominator = 1;  # 분모
my $count = 0;

for (1..1000) {
    my $n = $beforeDenominator;
    my $d = (2 * $beforeDenominator) + $beforeNumerator;

    my $numerator = $n + $d;
    my $denominator = $d;

    $count += 1 if "$numerator".chars > "$denominator".chars;

    $beforeNumerator = $n;
    $beforeDenominator = $d;
}

say $count;
