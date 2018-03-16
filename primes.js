var mainSpan = document.getElementsByClassName("challenge")[0];
var mainText = mainSpan.textContent;

var cuttedText = mainText.substr(2, mainText.length-3);

var tab = cuttedText.split(",");
var finalString;
var primes = [];


function getPrimesFromRange(min, max) {
    var sieve = [], i, j;
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            if (i >= min) {
               primes.push(i);
               //finalString += i + " ";
            }
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
getPrimesFromRange(tab[0],tab[2]);

primes.shift();
primes.pop();
var allPrimes = primes.join(", ")


document.forms[0].elements[1].value=  allPrimes
