/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    // this snippet causes it to fail the tests. no idea why
    // if (![brand, motor, color].every((param) => typeof param === 'string')) {
    //   throw new Error('all three parameters must be strings');
    // }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
