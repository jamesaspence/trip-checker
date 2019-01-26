export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
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
    console.log(`Attempting login with ${email}:${password}`);
    setTimeout(() => {
      console.log(`timeout succeeded!`);
      dispatch(loginSuccess({
        email: email,
        first_name: 'James',
        last_name: 'Spence'
      }));
    }, 3000);
  }
}