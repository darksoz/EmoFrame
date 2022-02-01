import axios from "axios";

export const TOKEN_KEY = "@Emoframe-Token";
export const EMAIL = "@Emoframe-Email";
export const USERNAME = "@Emoframe-Username";
export const USERTYPE = "@Emoframe-Usertype";
export const IDTESTDATA = "@Emoframe-IdTestData";

export const isAuthenticated = () => {
  if (localStorage.getItem(TOKEN_KEY) === null) {
    return false;
  }
  else {
    var config = {
      method: 'get',
      url: `http://localhost:5000/api/check`,
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    };
    axios(config)
      .then(function (response) {
      })
      .catch(function (error) {
        logout();
      });
  }
  return true;
}

export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if(token === undefined){
    return null;
  }
  return token;
}

export const getEmail = () => localStorage.getItem(EMAIL);
export const getUsername = () => localStorage.getItem(USERNAME);
export const getUsertype = () => localStorage.getItem(USERTYPE);
export const getIdTestData = () => localStorage.getItem(IDTESTDATA);


export const setToken = (token) => {
  if(token !== undefined){
    localStorage.setItem(TOKEN_KEY, token);
  }
}

export const setEmail = (email) => localStorage.setItem(EMAIL, email);
export const setUsername = (name) => localStorage.setItem(USERNAME, name)
export const setUsertype = (usertype) => localStorage.setItem(USERTYPE, usertype);
export const setIdTestData = (id) => localStorage.setItem(IDTESTDATA, id);

export const login = (data) => {
  setToken(data.access_token);
  setEmail(data.email);
  setUsername(data.name);
  setUsertype(data.usertype);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EMAIL);
  localStorage.removeItem(USERNAME);
  localStorage.removeItem(USERTYPE);
};