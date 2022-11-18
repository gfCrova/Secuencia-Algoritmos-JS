
const convertir = (str) => {
    let newStr = str[0].toUpperCase() + str.substring(1).toLowerCase();
    return newStr;
}
convertir("texto de relleno"); // OUTPUT: Texto de relleno


// Covertir la primera letra de todas las palabras de un String en MAYUS.
const titleCase = (str) => {
    
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    let newStr = arr.join(" ")
    return newStr;
}

titleCase("tExTO ComBiNAdO");    // OUTPUT: Texto Combinado
titleCase("texto en minuscula"); // OUTPUT: Texto En Minúscula
titleCase("TEXTO EN MAYÚSCULA"); // OUTPUT: Texto En Mayúscula

