
// Generar números aleatorios 
function getRandonNumber(size) {
    return Math.floor(Math.random() * size);
}
// Función que se encarga de medir la distancia donde se hace el click(e) y el objetivo (se utiliza el teorema de pitagoras para calcular el eje x y el eje y)
function getDistance(e, objetivo) {
    let difejeX = e.offsetX - objetivo.x;
    let difejeY = e.offsetY - objetivo.y;
    return Math.sqrt((difejeX * difejeX) + (difejeY + difejeY));       // Math.sqrt raiz cuadrada
}

function getPista(distancia) {
    if (distancia <= 5) {
        return "¡¡¡Lo has logrado!!!";
    } else if (distancia <= 50) {
        return "Te estás quemando!!!";
    } else if (distancia <= 75) {
        return "Caliente!";
    } else if (distancia <= 100) {
        return "Cálido!";
    } else if (distancia <= 125) {
        return "Te estas acercando!!";
    } else if (distancia <= 150) {
        return "Falta poco!!!";
    } else if (distancia <= 175) {
        return "Cerca!!";
    } else if (distancia <= 200) {
        return "No muy lejos!!";
    } else if (distancia <= 225) {
        return "Frío!!";
    } else if (distancia <= 250) {
        return "Muy Frío!";
    } else if (distancia <= 275) {
        return "Helado!";
    } else if (distancia <= 360) {
        return "-50° bajo cero!";
    }
}