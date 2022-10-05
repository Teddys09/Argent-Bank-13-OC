import React from 'react';

const Account = (data) => {
  return (
    <section className="account">
      <div className="account-container">
        <h3 className="account-title">{data.title}</h3>
        <p className="account-amount">{data.amount}</p>
        <p className="amount-description">{data.balance}</p>
      </div>
      <button className="transaction-button">View transactions</button>
    </section>
  );
};

export default Account;
