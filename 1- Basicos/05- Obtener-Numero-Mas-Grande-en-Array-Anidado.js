
const elMayorDeCadaArray = (arr) => {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let result = Math.max(...arr[i]);
        arr2.push(result);
    }
    return arr2;
}

elMayorDeCadaArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [ 5, 27, 39, 1001 ]