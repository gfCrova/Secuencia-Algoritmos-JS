// "Object.freeze" congela para que nadie pueda modificar el valor

const freezeObj = () => {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS)

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


// Busqueda de Perfil 

const contacts = [
    { firstName: "Akira", lastName: "Laine", number: "0543236543", likes: ["Pizza", "Coding", "Brownie Points"] },
    { firstName: "Harry", lastName: "Potter", number: "0994372684", likes: ["Hogwarts", "Magic", "Hagrid"] },
    { firstName: "Sherlock", lastName: "Holmes", number: "0487345643", likes: ["Intriguing Cases", "Violin"] },
    { firstName: "Kristian", lastName: "Vos", number: "unknown", likes: ["JavaScript", "Gaming", "Foxes"] },
];

const lookUpProfile = (name, prop) => {
    for (var i = 0; i < contacts.length; i++) {
        console.log(contacts[i][prop]);
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

lookUpProfile("Akira", "likes");
