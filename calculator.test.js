// calculator.test.js
const { add, subtract, multiply, divide } = require('./calculator');

test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
    expect(multiply(4, 2)).toBe(8);
});

test('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
});

test('throws error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
