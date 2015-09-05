export default class PrimeFactors {
    constructor() {
        let self = this;
    }
    findPrimeFactors(number) {
        let factors = this.findFactors(number);
        let primeFactors = factors.filter((number) => {
            let factors = this.findFactors(number);
            return factors.length === 1;
        });
        
        return primeFactors;
    }
    findFactors(number) {
        let factors = [];
        for(let i = 2; i <= number; i++) {
            let quotient = number/i;
            if (quotient === Math.floor(quotient)) {
                factors.push(i);
            }
        }
        return factors;
    }
    isPrime(number) {
        let factors = findFactors(number);
        return factors.length === 1
    }
    logto1000() {
        for(let i = 2; i <= 1000; i++) {
            console.log(i + ": " + this.findPrimeFactors(i));
        }
    }
}
