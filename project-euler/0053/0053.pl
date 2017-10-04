#!/usr/bin/env perl6
use v6;

my %factMap = ();
sub factorial($number) {
    unless %factMap{$number} {
        %factMap{$number} = [*] 1..$number;
    }
    %factMap{$number};
}
sub combination(Int $n, Int $r) {
    (factorial($n) / factorial($n - $r)) / factorial($r);
}

my $count = 0;
for (1..100) -> $i {
    for reverse(1..$i) -> $j {
        $count += 1 if combination($i, $j) > 1000000;
    }
}
say $count;
