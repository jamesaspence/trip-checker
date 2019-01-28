'use strict';

const localStorage = window.chrome.storage.local;

/**
 * Stores an object into the storage.
 *
 * @param data
 * @returns {Promise}
 */
export function store(data) {
  return new Promise(resolve => localStorage.set(data, resolve));
}

/**
 * Sets a key and value to the storage.
 *
 * @param key
 * @param value
 * @returns {Promise}
 */
export function set(key, value) {
  let data = {};
  data[key] = value;
  return store(data);
}

/**
 * Removes an item from storage.
 *
 * @param key
 * @returns {Promise}
 */
export function remove(key) {
  return new Promise(resolve => localStorage.remove(key, resolve));
}

/**
 * Clears out the storage.
 *
 * @returns {Promise}
 */
export function clearAll() {
  return new Promise(resolve => localStorage.clear(resolve));
}

/**
 * Retrieves an item from the storage, or returns a default value.
 *
 * @param key
 * @param defaultValue
 * @returns {Promise}
 */
export function get(key, defaultValue = undefined) {
  return new Promise(resolve => {
    localStorage.get(key, values => {
      let value = values[key];

      if (typeof value === 'undefined') {
        value = defaultValue;

        return resolve(value);
      }
    });
  });
}