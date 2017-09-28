/**
 * The `Math2` class provides some simple math functions.
 * @example
 * let math = new Math2();
 * let sum = math.sum(3, 5);
 * console.log(sum);
 */
class Math2 {
  /**
   * @param {number} x
   * @param {number} y
   * @return {number} sum of x and y
   */
  add (x, y) {
    return x + y
  }

  /**
   * @param {number} x
   * @param {number} y
   * @return {number} difference of x and y
   */
  subtract (x, y) {
    return x - y
  }

  /**
   * @param {number} x
   * @param {number} y
   * @return {number} product of x and y
   */
  multiply (x, y) {
    return x * y
  }

  /**
   * @param {number} x
   * @param {number} y
   * @return {number} quotient of x and y
   */
  divide (x, y) {
    return x / y
  }
}

export default Math2
