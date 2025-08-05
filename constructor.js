class Car { 
    constructor(brand, year) 
    { this.brand = brand; 
        this.year = year; }
        displayInfo() { console.log(`${this.brand} was made in ${this.year}`); }
     } 
     const myCar = new Car("Toyota", 2021); myCar.displayInfo();