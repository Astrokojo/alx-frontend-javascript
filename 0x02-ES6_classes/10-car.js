export default class Car {
  constructor(brand, motor, color) {
    if (![brand, motor, color].every((param) => typeof param === 'string')) {
      throw new Error('all three parameters must be strings');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
