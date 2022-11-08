import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentModal = ({ orderId, name, amount }) => {
  const navigate = useNavigate();

  const payment = {
    sandbox: true,
    merchant_id: `${process.env.REACT_APP_MERCHANT_ID}`,
    return_url: 'login',
    cancel_url: '/register',
    notify_url: 'https://avishkadevinda.up.railway.app/api/v1/payment/notify',
    order_id: orderId,
    items: name,
    amount,
    currency: 'LKR',
    first_name: 'galaxy',
    last_name: 'test',
    email: 'galaxyx265@gmail.com',
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

  window.payhere.onCompleted = async function onCompleted(orderId) {
    console.log(`Payment completed. OrderID: ${orderId}`);
    alert(`order_id: ${orderId}`);

    const order = {
      merchant_id: `${process.env.REACT_APP_MERCHANT_ID}`,
      order_id: orderId,
      items: name,
      amount,
      currency: 'USD',
      first_name: 'galaxy',
      last_name: 'test',
      email: 'galaxyx265@gmail.com',
      phone: '0771234567',
      address: 'No.1, Galle Road',
      city: 'Colombo',
      country: 'Sri Lanka',
      delivery_address: 'No. 46, Galle road, Kalutara South',
      delivery_city: 'Kalutara',
      delivery_country: 'Sri Lanka',
    };
    await axios
      .post('https://avishkadevinda.up.railway.app/api/v1/order', order)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    await navigate(`/payment/${orderId}`, { replace: true });

    // alert(`Payment completed. OrderID: ${orderId}`);
  };

  window.payhere.onDismissed = function onDismissed() {
    console.log('Payment dismissed');
    alert('Payment dismissed');
  };

  window.payhere.onError = function onError(error) {
    console.log(`Error:   ${error}`);
    alert(`Error: ${error}`);
  };

  function pay() {
    window.payhere.startPayment(payment);
  }

  return <button onClick={pay}>Pay with Payhere</button>;
};

export default PaymentModal;
