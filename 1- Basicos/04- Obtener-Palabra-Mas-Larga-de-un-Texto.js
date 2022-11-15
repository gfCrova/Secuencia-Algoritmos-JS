
// METODO .ForEach
const getPalabraMasLarga = (str) => {

    let palabra_mas_grande = "";
    let palabras = str.split(" "); 
    palabras.forEach((palabra) => {
        if (palabra.length > palabra_mas_grande.length) {
            palabra_mas_grande = palabra
        };
    });
    return palabra_mas_grande.length;
}
getPalabraMasLarga("The quick brown fox jumped over the lazy dog"); // 6  -> "jumped"

/**********************************************************/

// METODO .MAP
const getPalabraMasLarga2 = (str) => {
    return Math.max(...str.split(" ").map(word => word.length));
}
getPalabraMasLarga2("The quick brown fox jumped over the lazy dog"); // 6  -> "jumped"