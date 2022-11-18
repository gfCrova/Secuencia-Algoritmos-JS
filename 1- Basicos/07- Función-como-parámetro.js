
// Dado un elemento x, la 'prueba de verdad' se pasa si func(x)es true. Si ningún elemento pasa la prueba, devuelve undefined.

// Con FOR
const findElement = (arr, func) => {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

/********************************************************************/

// Con FIND
const findElement2 = (arr, func) => {
    let result = arr.find(func);
    return result;
}

findElement2([1, 2, 3, 4], num => num % 2 === 0);