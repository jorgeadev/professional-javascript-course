
function cuadrado(number) {
    return number * number;
}

let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos)

console.log(this)

/*
function() {

}*/

// Declaración de un objeto

/*let tutor = {
    nombres: "Jorge Alberto",
    apellidos: "Gomez Gomez",
    nombreCompleto: function () {
        setTimeout(function () {
            console.log(this.nombres + " " + this.apellidos);
        }, 1000);
    }
}*/

let tutor = {
    nombres: "Jorge Alberto",
    apellidos: "Gomez Gomez",
    nombreCompleto: function () {
        setTimeout(() => {
            console.log(this.nombres + " " + this.apellidos);
        }, 1000);
    }
}


tutor.nombreCompleto();