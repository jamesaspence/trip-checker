import axios from 'axios';
import { setUser } from '../util/localStorage';

export const VALIDATE_FORM = 'VALIDATE_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function loginSuccess(user, token) {
  setUser(user, token);

  return {
    type: LOGIN_SUCCESS,
    user,
    token
  };
}

export function loginFailure(response) {
  return {
    type: LOGIN_FAILURE,
    response
  };
}

export function validateForm(name, errors) {
  return {
    type: VALIDATE_FORM,
    name,
    errors
  }
}

export function attemptLogin(email, password) {
  return dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email,
      password
    }).then(res => {
      const { user, token } = res.data.data;
      dispatch(loginSuccess(user, token));
    })
      .catch(error => {
        console.log(error);
        console.log(error.response);
        dispatch(loginFailure(error.response));
      });
  }
}