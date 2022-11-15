
const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

factorial(5); // 120
// factorial(10); // 3628800
// factorial(15); // 1307674368000