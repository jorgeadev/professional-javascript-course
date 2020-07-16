let iterator = {
    currentValue: 1,
    next() {
        let resultado = {value: null, done: false};
        if (this.currentValue > 0 && this.currentValue <= 5) {
            resultado = {value: this.currentValue, done: false};
            this.currentValue += 1;
        }
        else {
            resultado = {done: true};
        }
        return resultado;
    }
};

/*console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

//setTimeout(() => console.log(iterator.next()), 5000)

let item = iterator.next();

while (!item.done) {
    console.log(item.value);
    item = iterator.next();
}