const Utils = require('./utils');

module.exports = {
  sendPaymentRequestToApi: function (totalAmount, totalShipping) {
    result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`total is: ${result}`);
  }
}
