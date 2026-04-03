/** Day 22: JavaScript classes & constructors.
👉 Task: Create a Car class with properties & methods. */

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`${this.brand} ${this.model} is starting`);
    }
}

let car1 = new Car("Toyota", "Innova");
car1.start();