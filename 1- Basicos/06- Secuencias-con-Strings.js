
// Concatenar un String(str), Tantas veces(num)

const repeatStringNumTimes = (str, num) => {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
}
repeatStringNumTimes("Text", 3); // OUTPUT: TextTextText


/*****************************************************************************************/


// Verificar si el String(str) TERMINA con la cadena especificada (target) 

const confirmEnding = (str, target) => {
    return str.slice(-target.length) === target  
}
console.log(confirmEnding("Bastian", "an")); // OUTPUT: True


/*****************************************************************************************/


//  Si el String(str) es más largo que la longitud máxima (num). Devuelve la cadena Truncada con...!

const truncateString = (str, num) => {
    if(str.length > num){
        return str.substr(0, num) + "...";
    } else {
        return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // OUTPUT: A-tisket...