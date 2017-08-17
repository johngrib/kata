#!/usr/bin/env perl

$max = 999;
$min = 101;
$palindrome = -1;

foreach $a (reverse $min .. $max) {

    next if($a % 10 == 0);

    foreach $b (reverse $min .. $max) {
        $number = $a * $b;

        last if($number < $palindrome);
        next if($number % 10 == 0);

        if($number > $palindrome && reverse($number) == $number) {
            $palindrome = $number;
        }
    }
}

print $palindrome;

