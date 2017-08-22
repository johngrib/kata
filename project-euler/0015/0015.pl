#!/usr/bin/env perl6
use v6;

my Int sub postfix:<!>(Int $number) { [*] 1..$number }

say (40!)/(20! * 20!);
