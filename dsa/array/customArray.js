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

    get (index) {
        return this.data[index];
    }
}

const myNewArray = new MyArray();
myNewArray.push("apple");
myNewArray.push("banana");
myNewArray.push("grape");

console.log(myNewArray.get(0));
console.log(myNewArray.get(1));
console.log(myNewArray.get(2));


console.log(myNewArray);
console.log(myNewArray.get(0));
