const getPaymentTokenFromAPI = require('./6-payment_token').getPaymentTokenFromAPI;
const chai = require('chai');
const expect = chai.expect;

describe('#etPaymentTokenFromAPI', function () {
  it('should wait for the resolved promise', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({data: 'Successful response from the API' });
        done();
      })
  });
});
