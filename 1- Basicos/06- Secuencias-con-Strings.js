// Concatenar un String(str), Tantas veces(num)
const repeatStringNumTimes = (str, num) => {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
}
repeatStringNumTimes("Text", 3); // OUTPUT: TextTextText



// Verificar si el String(str) TERMINA con la cadena especificada (target) 
const confirmEnding = (str, target) => {
    return str.slice(-target.length) === target  
}

console.log(confirmEnding("Bastian", "an")); // OUTPUT: True