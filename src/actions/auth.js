import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function loginSuccess(user, token) {
  return {
    type: LOGIN_SUCCESS,
    user,
    token
  };
}

export function loginFailure(response) {
  return {
    type: LOGIN_FAILURE,
    response: response
  };
}

export function attemptLogin(email, password) {
  return dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email,
      password
    }).then(res => {
      const { user, token } = res.data.data;
      dispatch(loginSuccess(user, token))
    })
      .catch(error => dispatch(loginFailure(error.response)));
  }
}