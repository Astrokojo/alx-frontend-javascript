export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new Error('size must be a number and location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // Return the size when cast to a number
  valueOf() {
    return this._size;
  }

  // Return the location when cast to a string
  toString() {
    return this._location;
  }
}
