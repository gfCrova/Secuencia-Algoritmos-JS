
/* Usando SPLICE() elimine los dos primeros elementos del array y agregue 'DarkSalmon' y 'BlanchedAlmond' en sus respectivos lugares. */

let arrFish = ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick'];

function htmlColorNames(arr2) {
    arr2.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr2;
}
console.log(htmlColorNames(arrFish));
// OUTPUT: ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']

// Usando SPLICE() eliminar elementos de arr, de modo que solo contenga elementos que sumen el valor de 10.

const arrNumber = [2, 4, 5, 1, 7, 5, 2, 1];
arrNumber.splice(1, 4);
console.log(arrNumber);
// OUTPUT: [2, 5, 2, 1]

/* Usando SLICE() extrae información del array de argumentos y devuelve un nuevo array que contenga los elementos de cadena 'warmy' y 'sunny'. */

arr = ['cold', 'rainy', 'warmy', 'sunny', 'cool', 'thunderstorms'];

function forecast(arr) {
    newArr = arr.slice(2, 4)
    return newArr;
}
console.log(forecast(arr));
    // OUTPUT:  ['warmy', 'sunny']