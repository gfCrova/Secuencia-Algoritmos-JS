

const esPrimitivo = (bool) => {
    if (bool === true || bool === false) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

esPrimitivo(null);