/*
Crear un script de módulo
JavaScript comenzó con un pequeño papel que desempeñar en una web mayoritariamente HTML. Hoy en día, es enorme y algunos sitios web están construidos casi en su totalidad con JavaScript. Para hacer que JavaScript sea más modular, limpio y fácil de mantener; ES6 introdujo una forma de compartir código fácilmente entre archivos JavaScript. Esto implica exportar partes de un archivo para usar en uno o más archivos e importar las partes que necesita, donde las necesita. Para aprovechar esta funcionalidad, debe crear un script en su documento HTML con una extensión typede module. Aquí hay un ejemplo:
 */

<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>


// Usar export para compartir un bloque de código


const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString };


// Reutilizar código JavaScript usando import


import {uppercaseString, lowercaseString} from './string_functions.js';  

uppercaseString("hello");
lowercaseString("WORLD!");


// Use * para importar todo desde un archivo


import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


// Cree un respaldo de exportación export default


export default function subtract(x, y) {
  return x - y;
}

