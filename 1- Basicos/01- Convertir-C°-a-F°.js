
const convertirCaF = (celsius) => {
    let fahrenheit = "Fahrenheit: " + (celsius * (9 / 5) + 32) + " grados.";
    return fahrenheit;
}

console.log(convertirCaF(30));  // Fahrenheit: 86 grados.
