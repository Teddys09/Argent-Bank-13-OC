import React from 'react';

import BankTree from '../assets/img/bank-tree.jpeg';
import Chat from '../assets/img/icon-chat.png';
import Money from '../assets/img/icon-money.png';
import Security from '../assets/img/icon-security.png';
import FeatureHome from '../components/FeatureHome';

const Home = () => {
  // add style to banner
  const bannerStyle = {
    backgroundImage: `url(${BankTree})`,
  };
  const priority = {
    title: "You're our #1 priority",
    img: Chat,
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  };
  const security = {
    title: 'Security you can trust',
    img: Security,
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  };
  const money = {
    title: 'Keep your money under your mattress',
    img: Money,
    text: 'The more you save with us, the higher your interest rate will be!',
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
        <FeatureHome {...priority} />
        <FeatureHome {...money} />
        <FeatureHome {...security} />
      </section>
    </div>
  );
};

export default Home;
