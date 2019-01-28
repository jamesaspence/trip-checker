import { get, set, remove } from './chromeStorage';

export const ACCESS_TOKEN_KEY = 'accessToken';

/**
 * Retrieves the access token.
 *
 * @returns {Promise}
 */
export function getAccessToken() {
  return get(ACCESS_TOKEN_KEY);
}

/**
 * Sets the access token.
 *
 * @param value
 * @returns {Promise}
 */
export function setAccessToken(value) {
  return set(ACCESS_TOKEN_KEY, value);
}

/**
 * Clears the access token.
 *
 * @returns {Promise}
 */
export function clearAccessToken() {
  return remove(ACCESS_TOKEN_KEY);
}