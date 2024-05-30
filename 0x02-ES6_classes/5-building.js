export default class Building {
  constructor(sqft) {
    // Fix for throwing errors when ocerride rules are not enforced using the `new.target`.
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
