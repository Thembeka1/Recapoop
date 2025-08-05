 class Counter { #count = 0; increment() 
    { this.#count++; console.log(`Count: ${this.#count}`); } 
} 
const c = new Counter(); c.increment();
 class MathUtil { static square(x) { return x * x; } 
} 

console.log(MathUtil.square(5));