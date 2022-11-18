
// Método tradicional
const esPrimitivo = (bool) => {
    if (bool === true || bool === false) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

esPrimitivo(null);  // OUTPUT: false
esPrimitivo(true);  // OUTPUT: true
esPrimitivo(false); // OUTPUT: true
esPrimitivo("Hola");// OUTPUT: false


// Método TERNARIO
const esPrimitivo2 = (bool) => {
    const result = bool === true || bool === false ? true : false
    return result;
}

esPrimitivo2(null);