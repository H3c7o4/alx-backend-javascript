const assert = require('assert');
const calculateNumber = require('./1-calcul').calculateNumber;

describe("calculateNumber", function() {
  it("should calculate the sum of 2 numbers", function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.equal(calculateNumber('SUM', 10.6, 4.1), 15);
  });

  it("should calculate the substraction of 2 numbers", function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.equal(calculateNumber('SUBTRACT', -1, -1), 0);
  });

  it("should divide the divide a number by another", function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
