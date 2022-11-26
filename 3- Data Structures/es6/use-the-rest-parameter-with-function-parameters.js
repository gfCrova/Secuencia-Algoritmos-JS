
// Parámetro Rest en los parámetros de una función

const sum = (...args) => {

  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(0, 1, 2))