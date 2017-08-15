#!/usr/bin/env perl

$sum = 0;

for (1 .. 999) {
    if(($_ % 3) == 0 || ($_ % 5 == 0)) {
        $sum += $_;
    }
}

print $sum;

