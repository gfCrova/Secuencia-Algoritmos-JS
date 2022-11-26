
/* resolve and reject
Los parámetros resolve y reject proporcionados al argumento de la promesa se utilizan para hacer esto. 
resolve se usa cuando quiere que su promesa tenga éxito y reject se usa cuando quiere que falle */

/*  
Manejar una promesa cumplida con .then y .catch
Cuando realiza una solicitud del servidor, lleva algo de tiempo y, una vez que se completa, generalmente desea hacer algo con la respuesta del servidor. 
THEN método, se ejecuta inmediatamente después de que se cumpla su promesa con resolve
CATCH es el método utilizado cuando su promesa ha sido rechazada. Se ejecuta inmediatamente después de llamar al método de una promesa. */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});
makeServerRequest.catch(error => {
    console.log(error);
});
