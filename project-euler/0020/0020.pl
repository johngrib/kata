#!/usr/bin/env perl6
use v6;

my Int sub postfix:<!>(Int $number) { [*] 1..$number }

say [+] (100!).split('');
