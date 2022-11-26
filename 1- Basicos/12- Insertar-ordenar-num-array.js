
const getIndexToIns = (arr, num) => {
    arr.push(num);                          // Colocar el elemento(num) al final del array
    arr.sort(function(a,b){return a - b;}); // Ordenar menor a mayor : [40, 50, 60]
    return arr.indexOf(num);                // Devolver posicion del elemento en el array 
}

console.log(getIndexToIns([40, 60], 50)); // OUTPUT : 1
