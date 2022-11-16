
const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

factorial(10); // OUTPUT: 3628800
