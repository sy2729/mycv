const setLocalStore = (key, value)=>{
  return window.localStorage.setItem(key, value);
}

const getLocalStore = (key)=>{
  return window.localStorage[key];
}

export default {
  setLocalStore,
  getLocalStore
}