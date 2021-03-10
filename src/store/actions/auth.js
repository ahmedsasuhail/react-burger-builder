import axios from 'axios';

import * as actionTypes from './actionTypes';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

const authFailed = (error) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: error,
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAeKXWATNMLVucFtDMTr0WRUk-kYAIMsao';

    if (!isSignUp) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAeKXWATNMLVucFtDMTr0WRUk-kYAIMsao';
    }

    axios
      .post(url, authData)
      .then((res) => {
        console.log('Success', res.data);
        dispatch(authSuccess(res.data));
      })
      .catch((err) => {
        console.log('Error', err);
        dispatch(authFailed(err));
      });
  };
};
