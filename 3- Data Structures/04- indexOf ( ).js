
// Usa indexOf() para que devuelva TRUE si el elemento existe en la matriz y FALSE si no.

let arr = ['squash', 'onions', 'shallots'];

function quickCheck(a, elem) {
    return a.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(arr, 'mushrooms'));
    // OUTPUT: false



/** Utilizando un bucle, devolver una versión filtrada del array de modo que se elimine cualquier array anidado dentro de la arr que contiene .elem */

let arrayAnidado = [["trumpets", 2], ["flutes", 4], ["saxophones", 2]]

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(filteredArray(arrayAnidado, 2));
    // OUTPUT:  [[ 'flutes', 4 ]]