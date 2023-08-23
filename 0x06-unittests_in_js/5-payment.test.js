const sendPaymentRequestToAPI = require('./5-payment').sendPaymentRequestToApi;
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require("chai");
const expect = chai.expect;

describe('#sendPaymentRequestToAPI', function () {

  beforeEach(function () {
    spyCalc = sinon.spy(Utils, 'calculateNumber');
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function () {
    spyCalc.restore();
    spyConsole.restore();
  });

  it('should call sendPaymentRequestToAPI with 100 and 20', function () {
    sendPaymentRequestToAPI(100, 20);
    expect(spyCalc.withArgs('SUM', 100, 20).calledOnce).to.be.true;
    expect(spyConsole.withArgs('The total is: 120').calledOnce).to.be.true;
  });

  it('should call sendPaymentRequestToAPI with 10 and 10', function () {
    sendPaymentRequestToAPI(10, 10);
    expect(spyCalc.withArgs('SUM', 10, 10).calledOnce).to.be.true;
    expect(spyConsole.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
