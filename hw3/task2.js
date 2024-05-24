// ax**2 + bx + c = 0

// Equation #1: x**2 - 6x + 9 = 0
const a = 1, b = -6, c = 9;

let discriminant = b**2 - 4 * a * c;

// D = 0 => 1 solution
// x = -b/2a
const x = -b / (2 * a);

// Equation #2: x**2 - 4x - 5 = 0
const a1 = 1, b1 = -4, c1 = -5;

discriminant = b1**2 - 4 * a1 * c1;
// D = 36 => 2 solutions

const x1 = (-b1 + discriminant**0.5) / (2 * a1);
const x2 = (-b1 - discriminant**0.5) / (2 * a1);

console.log(`Ответ к уравнению 1: ${x}, Ответ к уравнению 2: ${x1} и ${x2}.`);