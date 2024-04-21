class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return "0x" + this.valueOf().toString(16).toUpperCase();
    }

    plus(num) {
        return new Hex(this.valueOf() + Number(num));
    }

    minus(num) {
        return new Hex(this.valueOf() - Number(num));
    }

    parse(hexAsString) {
        return parseInt(hexAsString, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
