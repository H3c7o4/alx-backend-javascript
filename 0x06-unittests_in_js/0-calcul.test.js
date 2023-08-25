const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('#CalculateNumber', function () {
  it('should return the sum of rounded values of two numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the sum of rounded values of two numbers', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the sum of rounded values of two numbers', function () {
    assert.strictEqual(calculateNumber(1.7, 3), 5);
  });

  it('should return the sum of rounded values of two numbers', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the sum of rounded values of two numbers', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
