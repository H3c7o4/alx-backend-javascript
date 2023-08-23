module.exports = {
  getPaymentTokenFromAPI: function (success) {
    if (success) {
      return new Promise(function (resolve, reject) {
        resolve({data: 'Successful response from the API' });
      });
    }
  }
}
