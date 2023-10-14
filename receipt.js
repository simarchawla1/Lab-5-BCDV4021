import React from 'react';

function Receipt(props) {
  const { sender, receiver, amount, date } = props.transaction;

  return (
    <div>
      <h2>Transaction Receipt</h2>
      <ul>
        <li><strong>Sender:</strong> {sender}</li>
        <li><strong>Receiver:</strong> {receiver}</li>
        <li><strong>Amount:</strong> ${amount}</li>
        <li><strong>Date:</strong> {date}</li>
      </ul>
    </div>
  );
}

export default Receipt;



import React from 'react';
import Receipt from './Receipt';

function Transfer() {
  const transactionData = {
    sender: 'John Doe',
    receiver: 'Jane Smith',
    amount: 100,
    date: '2023-10-15',
  };

  return (
    <div>
      <h1>Transfer Funds</h1>
      <Receipt transaction={transactionData} />
    </div>
  );
}

export default Transfer;
