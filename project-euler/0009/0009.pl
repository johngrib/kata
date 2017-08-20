#!/usr/bin/env perl

use POSIX;

@squares = ();
$squareMap = ();

for (1..1000) {
    $sq = $_ ** 2;
    push @squares, $sq;
    $squareMap[$sq] = $_;
}

@reversed = reverse @squares;

$result = -1;

loop:
for $i (@squares) {
    for $j (@reversed) {

        last if $i >= $j;

        $last = $i + $j;

        next unless($squareMap[$last]);

        $value = $squareMap[$i] + $squareMap[$j] + $squareMap[$last];

        if($value == 1000) {
            $result = $squareMap[$i] * $squareMap[$j] * $squareMap[$last];
            last loop;
        }
    }
}

print "$result\n";
