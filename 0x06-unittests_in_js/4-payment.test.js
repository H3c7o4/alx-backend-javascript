const sendPaymentRequestToApi = require('./4-payment').sendPaymentRequestToApi
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require("chai");
const expect = chai.expect;

describe("#sendPaymentRequestToApi", function () {
  it("should call utils.calculateNumber and console.log the correct message", function () {
    const calcStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(calcStub.withArgs('SUM', 100, 20).calledOnce).to.be.true;
    expect(spy.withArgs('The total is: 10').calledOnce).to.be.true;

    spy.restore();
    calcStub.restore();
  });
});
