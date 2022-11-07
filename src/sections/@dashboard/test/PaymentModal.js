import React from 'react';

const PaymentModal = ({ orderId, name, amount }) => {
    
  const payment = {
    sandbox: true, 
    merchant_id: `${process.env.REACT_APP_MERCHANT_ID}`, 
    return_url: 'http://sample.com/return',
    cancel_url: 'http://sample.com/cancel',
    notify_url: 'http://sample.com/notify',
    order_id: orderId,
    items: name,
    amount: amount, 
    currency: 'LKR',
    first_name: 'galaxy',
    last_name: 'test',
    email: 'test@gmail.com',
    phone: '0771234567',
    address: 'No.1, Galle Road',
    city: 'Colombo',
    country: 'Sri Lanka',
    delivery_address: 'No. 46, Galle road, Kalutara South', // optional field
    delivery_city: 'Kalutara', 
    delivery_country: 'Sri Lanka', 
    custom_1: '',
    custom_2: '', 
  };
  
    
  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
  };

  window.payhere.onDismissed = function onDismissed() {
    console.log("Payment dismissed");
  };

  window.payhere.onError = function onError(error) {
    console.log("Error:"  + error);
  };

  function pay(){
    window.payhere.startPayment(payment);
  }

  return <button onClick={pay}>Pay with Payhere</button>;
};

export default PaymentModal;