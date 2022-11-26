
/** Usando POP() y SHIFT(), elimine el primer y el último elemento del array de argumentos, y asigne los elementos eliminados a sus variables correspondientes, de modo que el nuevo array que retorne contenga sus valores. */
const popShift = (arr) => {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));


/** Usando PUSH()y UNSHIFT() agregar 'I', 2, 'three' al principio del array y 7, 'VIII', 9 al final 
 para que el array contenga representaciones de los números 1-9 en orden. */

let arrEscala = ['IV', 5, 'six'];

const mixedNumbers = (arr) => {
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three');
  return arr;
}
console.log(mixedNumbers(arrEscala));