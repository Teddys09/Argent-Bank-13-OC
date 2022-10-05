import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-container">
      La page n'existe pas ! <br />
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  );
};

export default Error;
