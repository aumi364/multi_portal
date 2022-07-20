const localStore = (stringify = false, storage = localStorage) => {
  const get = key => {
    return storage.getItem(key);
  };
  const set = ({ key, value }) => {
    return storage.setItem(key, value);
  };
};
