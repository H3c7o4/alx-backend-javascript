export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
