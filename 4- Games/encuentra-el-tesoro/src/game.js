
const WIDTH = 400;
const HEIGH = 400;

let objetivo = {
    x: getRandonNumber(WIDTH),
    y: getRandonNumber(HEIGH),
};


let $map = document.getElementById('mapa');
let $dist = document.getElementById('dist');

$map.addEventListener('click', function(e){
    let distancia = getDistance(e, objetivo);
    let pista = getPista(distancia);
    $dist.innerHTML = `<h1>${pista}</h1>`;
})
