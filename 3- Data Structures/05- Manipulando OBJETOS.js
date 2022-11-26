// 3 Formas de agregar pares CLAVE - VALOR a un Objeto

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    data: { totalUsers: 51, online: 42 }
};

foods.bananas = 13;
foods['grapes'] = 35;

const propfoods = 'strawberries';
foods[propfoods] = 27;

foods.data.online = 60;  //  Modificar un objeto anidado dentro de un objeto
delete foods.plums;     // Borrar propiedad de objeto

console.log(foods);/*  OUTPUT:  { apples: 25, oranges: 32, data: {  totalUsers: 51, online: 60 }, bananas: 13, grapes: 35, strawberries: 27 }  */


// Acceder a nombres de propiedades con notación de corchetes
const comprobarInventario = (artículo) => {
    return foods[artículo];
}
console.log(comprobarInventario('apples'));  // OUTPUT: 25  

// Comprobar si un objeto tiene una propiedad
const estanOnoEstan = (prop) => {
    if('apples' in prop && 'oranges' in prop && 'bananas' in prop && 'data' in prop ) {
        return true
    } else {
        return false
    }
}
console.log(estanOnoEstan(foods));  //OUTPUT: true



