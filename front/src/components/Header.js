import React from 'react';
import BankLogo from '../assets/img/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../utils/store';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const navigate = useNavigate();

  const isConnected = () => {
    if (user.token !== '') {
      return (
        <div className="log-container">
          <Link to="/user" className="signIn">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </Link>
          <div
            className="signIn"
            onClick={() => {
              dispatch(logout());
              navigate('/');
            }}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </div>
        </div>
      );
    } else if (user.firstName === '') {
      return (
        <div className="log-container">
          <Link to="/sign-in" className="signIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      );
    }
  };

  return (
    <header className="global-header">
      <Link to="/">
        <img src={BankLogo} alt="Logo Bank" />
      </Link>

      {isConnected()}
    </header>
  );
};

export default Header;
