import { add } from '../src/calc';

describe("Test Calc", () => {
  it('should be add two numbers - 5 + 10', () => {
    expect(add(5,10)).toBe(15);
  })

  it('should be add two numbers - 45 + 105', () => {
    expect(add(45,105)).toBe(150);
  })
})
