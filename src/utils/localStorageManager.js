export default {
  set: (key, value) => {
    if (!window.localStorage) {
      return;
    }
    window.localStorage.setItem(key, value);
  },
  get: (key) => {
    if (!window.localStorage) {
      return;
    }

    return window.localStorage.getItem(key);
  },
  remove: (key) => {
    if (!window.localStorage) {
      return;
    }

    return window.localStorage.removeItem(key);
  },

};
