const fibonacci = function(n) {
    const number = parseInt(n);

    if(number < 1){
        return "OOPS"
    } else {
        let n1 = 0, n2 = 1, nextTerm;

        for (let i = 1; i <= number; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }

        return n1;

    }
    
};

console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
