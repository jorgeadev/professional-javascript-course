function* counter() {
    /*console.log("Estoy aquí");
    yield 1;
    console.log("Ahora estoy aquí");
    yield 2;*/
    for (var i = 1; i <= 5; i++) {
        yield i;
    }
}

let generator = counter();

function* retornador() {
    yield* counter();
    console.log("Regresé")
};

let g = retornador();

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

//console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
