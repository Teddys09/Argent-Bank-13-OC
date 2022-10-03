import React, { useState } from 'react';
import axios from 'axios';
import { token } from '../utils/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const errorDiv = document.querySelector('.error-div');

    axios({
      method: 'post',
      url: 'http://localhost:3001/api/v1/user/login',
      withCredentials: false,
      data: {
        email: userName,
        password,
      },
    })
      .then((res) => {
        dispatch(token(res.data.body.token));

        // navigate replace window.location.href
        navigate('/user');
      })

      .catch((err) => {
        console.log(err);

        errorDiv.innerHTML = 'Identifiant ou mot de passe incorrect';
      });
  };

  return (
    <main className="background-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form action="submit" onSubmit={handleLogin} id="sign-in-form">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <input type="submit" className="sign-in-button" value="Sign In" />
        </form>
        <div className="error-div"></div>
      </section>
    </main>
  );
};

export default SignIn;
