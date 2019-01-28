const localStorage = window.localStorage;

export const USER_KEY = 'user';
export const TOKEN_KEY = 'authToken';

export function get(key, defaultValue = undefined) {
  let value = localStorage.getItem(key);
  if (!localStorage.hasOwnProperty(key)) {
    value = defaultValue;
  }

  return value;
}

export function set(key, value) {
  return localStorage.setItem(key, value);
}

export function remove(key) {
  return localStorage.removeItem(key);
}

export function hasKey(key) {
  return typeof get(key) !== 'undefined';
}

/**
 * Retrieves the user.
 *
 * @returns {object}
 */
export function getUser() {
  return hasKey(USER_KEY) ? window.JSON.parse(get(USER_KEY)) : undefined;
}

export function getToken() {
  return get(TOKEN_KEY);
}

/**
 * Sets the user and access token.
 *
 * @param user
 * @param token
 */
export function setUser(user, token) {
  set(USER_KEY, window.JSON.stringify(user));
  set(TOKEN_KEY, token);
}

/**
 * Clears the access token.
 */
export function clearUserAndToken() {
  remove(USER_KEY);
  remove(TOKEN_KEY);
}