import React, { useEffect } from 'react';
import Account from '../components/Account';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { firstName, lastName } from '../utils/store';
import EditName from '../components/EditName';

const User = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/v1/user/profile',
      withCredentials: false,
      headers: {
        authorization: 'Bearer ' + user.token,
      },
    })
      .then((res) => {
        dispatch(firstName(res.data.body.firstName));
        dispatch(lastName(res.data.body.lastName));
      })

      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, user.token, user.firstName, user.lastName]);

  function cancelForm(e) {
    e.preventDefault();
    document.querySelector('.edit-name').style.display = 'none';
    document.querySelector('.main-title p').style.display = 'block';
    document.querySelector('.edit-button').style.display = 'inline-block';
    document.querySelector('.main-title h1').style.color = 'white';
    document.querySelector('.main-title p').style.color = 'white';
    document.querySelector('.background-dark').style.backgroundColor =
      'rgb(18, 0, 43)';
  }

  function sendForm(e) {
    e.preventDefault();
    let firstNameSelector = document.querySelector('#firstName').value;
    let lastNameSelector = document.querySelector('#lastName').value;

    if (firstNameSelector.length === 0) {
      firstNameSelector = user.firstName;
    }
    if (lastNameSelector.length === 0) {
      lastNameSelector = user.lastName;
    }

    axios({
      method: 'put',
      url: 'http://localhost:3001/api/v1/user/profile',
      withCredentials: false,
      headers: {
        authorization: 'Bearer ' + user.token,
      },
      data: {
        firstName: firstNameSelector,
        lastName: lastNameSelector,
      },
    })
      .then((res) => {
        dispatch(firstName(res.data.body.firstName));
        dispatch(lastName(res.data.body.lastName));
      })

      .catch((err) => {
        console.log(err);
      });
    document.querySelector('.edit-name').style.display = 'none';
    document.querySelector('.main-title p').style.display = 'block';
    document.querySelector('.edit-button').style.display = 'inline-block';
    document.querySelector('.background-dark').style.backgroundColor =
      'rgb(18, 0, 43)';
    document.querySelector('.main-title h1').style.color = 'white';
    document.querySelector('.main-title p').style.color = 'white';
  }

  return (
    <main className="background-dark">
      <div className="main-title">
        <h1>Welcome back</h1>
        <p>{user.firstName + ' ' + user.lastName}!</p>
        <EditName />
        <form className="edit-name">
          <div className="input-name-container">
            <input
              className="input-name"
              type="text"
              id="firstName"
              placeholder={user.firstName}
            />
            <input
              className="input-name"
              type="text"
              id="lastName"
              placeholder={user.lastName}
            />
          </div>
          <button className="button-name" onClick={(e) => sendForm(e)}>
            Save
          </button>
          <button className="button-name" onClick={(e) => cancelForm(e)}>
            Cancel
          </button>
        </form>
      </div>
      <Account />
      <Account />
      <Account />
    </main>
  );
};

export default User;
