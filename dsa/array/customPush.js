class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push (item) {
        this.data[this.length] = item;
        this.length++
        return this.length;
    }
}

const myNewArray = new MyArray();
myNewArray.push("apple");
myNewArray.push("banana");
myNewArray.push("grape");
console.log(myNewArray);
