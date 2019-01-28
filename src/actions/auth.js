import axios from 'axios';
import { setUser, clearUserAndToken } from '../util/localStorage';

export const VALIDATE_FORM = 'VALIDATE_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
export const LOGOUT = 'logout';

const getUrl = relativeUrl => `${process.env.REACT_APP_API_URL}${relativeUrl}`;

export function logout() {
  clearUserAndToken();

  return {
    type: LOGOUT
  }
}

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

export function registrationFailure(response) {
  return {
    type: REGISTRATION_FAILURE,
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
    axios.post(getUrl('/login'), {
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

export function attemptRegistration(firstName, lastName, email, password, confirmPassword) {
  return dispatch => {
    axios.post(getUrl('/register'), {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: confirmPassword
    }).then(res => {
      const { user, token } = res.data.data;
      dispatch(loginSuccess(user, token));
    }).catch(error => {
      dispatch(registrationFailure(error.response))
    })
  }
}