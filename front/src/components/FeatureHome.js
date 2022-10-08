import React from 'react';

const FeatureHome = (data) => {
  return (
    <div className="feature-item">
      <img src={data.img} alt={data.img} />
      <h3 className="feature-item-title">{data.title}</h3>
      <p>{data.text}</p>
    </div>
  );
};

export default FeatureHome;
