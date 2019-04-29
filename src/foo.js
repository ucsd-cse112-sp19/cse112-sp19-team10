/**
 * this is MyClass.
 */
export default class MyClass {
  /**
   * @param {number} a - this is a value.
   * @return {number} result of the sum value.
   */
  addOne (a) {
    return a + 1
  }
}

MyClass.addOne() // Call the function

module.exports = MyClass.addOne
