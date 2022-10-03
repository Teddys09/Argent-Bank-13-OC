import React from 'react';

import BankTree from '../assets/img/bank-tree.jpeg';
import Chat from '../assets/img/icon-chat.png';
import Money from '../assets/img/icon-money.png';
import Security from '../assets/img/icon-security.png';

const Home = () => {
  // add style to banner
  const bannerStyle = {
    backgroundImage: `url(${BankTree})`,
  };

  return (
    <div className="homeDiv">
      <div className="banner-home" style={bannerStyle}>
        <div className="banner-text">
          <p className="sub-title">No fees.</p>
          <p className="sub-title">No minimum deposit.</p>
          <p className="sub-title">High interest rates.</p>
          <p className="last-text">
            Open a savings account with Argent Bank today!
          </p>
        </div>
      </div>
      <section className="features">
        <div className="feature-item">
          <img src={Chat} alt="chat" />
          <h3 className="feature-item-title">You're our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="feature-item">
          <img src={Money} alt="money" />
          <h3 className="feature-item-title">
            More savings means higher rates
          </h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="feature-item">
          <img src={Security} alt="security" />
          <h3 className="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
