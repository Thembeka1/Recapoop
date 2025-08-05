class Calculator { add(a, b) { return a + b; } multiply(a, b) { return a * b; }
 } 
const calc = new Calculator(); 
console.log(calc.add(5, 7)); 
console.log(calc.multiply(3, 4)); 