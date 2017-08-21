#!/usr/bin/env perl

$sequence = 1;
$triangle = -1;
@divisors = ();

while(@divisors + 0 < 500) {
    $triangle = ((1 + $sequence) * $sequence) / 2;
    @divisors = &getDivisors($triangle);
    $sequence += 1;
}

print $triangle;

sub getDivisors {
    my $number = $_[0];
    my @divisors = ();
    my $quotient = $number;
    my $seq = 1;

    while($quotient > $seq) {
        if($number % $seq == 0) {
            $quotient = $number / $seq;
            push(@divisors, $seq);
            push(@divisors, $quotient) if $quotient != $seq;
        }
        $seq += 1;
    }
    return @divisors;
}
