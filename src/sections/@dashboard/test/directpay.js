import React from 'react';

const Directpay = ({ orderId, name, amount }) => {
  function pay() {
    window.DirectPayCardPayment.init({
      container: 'card_container',
      merchantId: 'IT15159',
      amount: '100.00',
      refCode: 'DP12345',
      currency: 'LKR',
      type: 'ONE_TIME_PAYMENT',
      customerEmail: 'abc@mail.com',
      customerMobile: '+94712345674',
      description: 'test products',
      debug: true,
      responseCallback: responseCallback,
      errorCallback: errorCallback,
      logo: 'https://test.com/directpay_logo.png',
      apiKey: '0e085ee21a84c2b58fb753af91b14ac30d9b072fc50341d7dc76afe7ea225207',
    });
  }

  function responseCallback(result) {
    console.log('successCallback-Client', result);
    alert(JSON.stringify(result));
  }

  function errorCallback(result) {
    console.log('successCallback-Client', result);
    alert(JSON.stringify(result));
  }

  return <button onClick={pay}>Pay with directpay</button>;
};

export default Directpay;
