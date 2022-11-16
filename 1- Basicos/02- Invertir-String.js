
const revertirString = (str) => {
    let result = str.split("");
    let result2 = result.reverse();
    let result3 = result2.join("");
    return result3;
}
revertirString("hello"); 
// OUTPUT: olleh