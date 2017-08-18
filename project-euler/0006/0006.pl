#!/usr/bin/env perl

$sum_of_squares += ($_ ** 2) for (1..100);

$sum += $_ for (1..100);

print(($sum ** 2) - $sum_of_squares);
