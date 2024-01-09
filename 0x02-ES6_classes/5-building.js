/* eslint-disable no-unused-vars */
/* eslint-disable */
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number')
      throw new TypeError('SQFT must be a number');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSQFT) {
    if (typeof newSQFT !== 'number')
      throw new TypeError('SQFT must be a number');
    this._sqft = newSQFT;
  }
  
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
