
// Usando bucle
function eliminarFalso(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArr.push(arr[i]) 
    }
    return newArr;
}

eliminarFalso([7, "ate", "", false, 9]); // OUTPUT: [ 7, "ate", 9 ] 
eliminarFalso([false, null, 0, NaN, undefined, ""]) // OUTPUT: []




// Con FILTER
const eliminarFalso2 = (arr) => { return arr.filter(Boolean);}

eliminarFalso2([7, "ate", "", false,  9]); // OUTPUT: [ 7, "ate", 9 ] 
eliminarFalso2([false, null, 0, NaN, undefined, ""]) // OUTPUT: []