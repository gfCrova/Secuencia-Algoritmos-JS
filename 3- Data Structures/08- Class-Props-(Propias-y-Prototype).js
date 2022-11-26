class Dog {
    constructor(name) {
        this.name = name;  // Propiedad DENTRO de la class (name)
    }
}

Dog.prototype.numLegs = 4; // Propiedad FUERA de la class (numLegs)

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);  // OUTPUT: ['name']
console.log(prototypeProps); // OUTPUT: ['numLegs']