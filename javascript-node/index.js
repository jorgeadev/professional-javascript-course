/*const request = require('request');

request("http://google.com", function () {
    console.log("Terminé la petición de Google");
});

console.log("Yo voy después en el código de la petición a Google");*/

const rp = require("request-promise");

// Typeof: promise
//fullfiled, rejected, pending, setled

rp("http://google.com").then(function (html) {
   console.log("Terminé la petición de Google");
}).catch(function (err) {
    console.log(err);
});