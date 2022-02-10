import localforage from 'localforage';

export const saveState = (state) => {
  localforage.setItem('state', state);
};

export const loadState = () => {
  return localforage.getItem('state');
};
