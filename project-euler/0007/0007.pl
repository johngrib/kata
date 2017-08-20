#!/usr/bin/env perl

sub is_prime {
    my($num) = @_;

    for(@primes) {
        if($num % $_ == 0) {
            return 0;
        }
    }
    return 1;
}

# https://en.wikipedia.org/wiki/Prime_number_theorem
$limit = 10001;
$temp_limit = $limit * log($limit) * 2;

@primes = &sieve($temp_limit);

print "@primes[$limit - 1]\n";

sub sieve {
    my($max) = @_;
    my @composite = ();
    my @prime = ();
    my $num = 2;

    while($num < $max) {
        if(@composite[$num]) {
            $num += 1;
            next;
        }
        push(@prime, $num);

        $next_num = $num + $num;
        while($next_num < $max) {
            @composite[$next_num] = 1;
            $next_num += $num;
        }
        $num += 1;
    }
    return @prime;
}
