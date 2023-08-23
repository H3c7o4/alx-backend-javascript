const sendPaymentRequestToApi = require('./3-payment').sendPaymentRequestToApi
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require("chai");
const expect = chai.expect;

describe("sendPaymentRequestToApi", function () {
  it("should verify utils.calculateNumber is called once", function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.withArgs('SUM', 100, 20).calledOnce).to.be.true;
    spy.restore();
  });
});
