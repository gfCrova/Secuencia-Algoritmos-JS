// Iterar a través de las claves de un objeto con FOR...IN

const users = {
    Alan: { online: false },
    Jeff: { online: true },
    Sarah: { online: false },
    Ryan: {
        online: true,
        data: {
            username: 'kennethCodesAllDay',
            joinDate: 'March 26, 2016',
            organization: 'freeCodeCamp',
            friends: [
                'Sam',
                'Kira',
                'Tomo'
            ]
        }
    },
}
// Funcion que devuelve si cuya prop. esta establecida en TRUE
const countOnline = (usersObj) => {
    let result = 0;
    for (let property in usersObj) {
        if (usersObj[property].online === true) {
            result++
        }
    }
    return result;
}
console.log(countOnline(users));


// Funcion que devuelve solo las claves de un objeto con OBJECT.KEYS()
const getArrayOfUsers = (obj) => {
    return Object.keys(obj)
}
console.log(getArrayOfUsers(users)); // ['Alan', 'Jeff', 'Sarah']

// Funcion que Modifica un array dentro de un objeto
const addFriend = (userObj, friend) => {
    userObj.Ryan.data.friends.push(friend)
    return userObj.Ryan.data.friends
}
console.log(addFriend(users, 'Pete'));