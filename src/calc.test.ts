import { add, multiply } from '../src/calc';

describe("Test Calc", () => {

  describe("Method add", () => {
    it('should be add two numbers: 5 + 10', () => {
      expect(add(5,10)).toBe(15);
    })
  
    it('should be add two numbers: 45 + 105', () => {
      expect(add(45,105)).toBe(150);
    })
  });

  describe("Method multiply", () => {
    it('should be multiply two numbers: 5 * 10', () => {
      expect(multiply(5,10)).toBe(50);
    })
  
    it('should be multiply numbers: 9 * 20', () => {
      expect(multiply(9,20)).toBe(180);
    })
  })
})
