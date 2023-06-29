export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  set students(array) {
    if (!(array instanceof Array)) {
      throw TypeError('students must be an array of strings');
    }
    this._students = array;
  }

  * getSides() {
    yield this._name;
    yield this._length;
    yield this._students;
  }
}
