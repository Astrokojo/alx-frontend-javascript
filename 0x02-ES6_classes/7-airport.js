export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error('both parameters must be strings');
    }
    // alternate way of type checking.
    // if (![name, code].every((param) => typeof param === 'string')) {
    //   throw new Error('both parameters must be strings');
    // }
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
