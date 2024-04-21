class List {
    constructor() {
        this.numArray = [];
        this.size = 0;
    }

    add(el) {
        this.numArray.push(el);
        this.size++;
    }

    remove(index) {
        if (this.numArray[index] === undefined) {
            return
        }

        this.numArray.sort((a, b) => a - b);
        this.numArray.splice(index, 1)[0];
        this.size--;
    }

    get(index) {
        if (this.numArray[index] === undefined) {
            return
        }

        this.numArray.sort((a, b) => a - b);
        return this.numArray.slice(index, index + 1)[0];
    }
}



let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));


