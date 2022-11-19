
const empalmarArrays = (arr1, arr2, n) => {
    let nArr1 = arr1.slice();
    let nArr2 = arr2.slice();
    nArr2.splice(n, 0, ...nArr1); 
    // "n" es la posicion, "0" que no remueve ningun valor, Se Agregan los valores del array ...nArr1
    return nArr2;
}

empalmarArrays([1, 2, 3], [4, 5, 6], 1); // OUTPUT: [ 4, 1, 2, 3, 5, 6 ]
empalmarArrays([1, 2], ["a", "b"], 1)   // OUTPUT: ["a", 1, 2, "b"]
