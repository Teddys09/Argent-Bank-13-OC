import React from 'react';

const Account = () => {
  return (
    <section className="account">
      <div className="account-container">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="amount-description">Available Balance</p>
      </div>
      <button className="transaction-button">View transactions</button>
    </section>
  );
};

export default Account;
