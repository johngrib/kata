#!/usr/bin/env perl6
use v6;

my %factMap = ();

sub factorial($number) {
    unless %factMap{$number} {
        %factMap{$number} = [*] 1..$number;
    }
    return %factMap{$number};
}

sub digitSum($number is copy) {
    return [+] gather while $number > 0 {
        my $n = $number % 10;
        take factorial($n);
        $number = ($number - $n) / 10;
    }
}

my $sum = [+] gather for (3..100000) -> $number {
    my $tsum = &digitSum($number);
    take $tsum if $number == $tsum;
}

say $sum;

