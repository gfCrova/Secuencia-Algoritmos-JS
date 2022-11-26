
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr2 = [...arr1];
console.log(arr2); //['JAN', 'FEB', 'MAR', 'APR', 'MAY']


/** Utilizando el operador de propagación devuelve el array ['learning', 'to', 'code', 'is', 'fun']. */

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']
    return sentence;
}
console.log(spreadOut());
// OUTPUT: ['learning', 'to', 'code', 'is', 'fun']


/** La Función toma un arr[] y un num como argumentos. Se supone que la función devuelve un nuevo array formado por numcopias de arr */
const copyMachine = (arr, num) => {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr])
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
// OUTPUT:  [[true, false, true], [false, false, true]]


// Desestructuración con el parámetro Rest para reasignar elementos de Arrays
const source = [1,2,3,4,5,6,7,8,9,10];

const removeFirstTwo = (list) => {
    const [a, b, ...arr] = list; 
    return arr;
}
const arr = removeFirstTwo(source);

console.log(arr); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
