const request = require("request");


function leer(url) {
    return new Promise(function (resolve, reject) {
        // Aqui ejecutar la función asíncrona
        request(url, function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response)
            }
        });
        /*resolve("Todo salió bien");
        reject(new Error("No se pudo completar"));*/
    });
}
leer("http://codigofacilito.com").then(function (response) {
    console.log(response)
}).catch(function (err) {
    console.log(err)
})