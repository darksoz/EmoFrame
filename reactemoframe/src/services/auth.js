import axios from "axios";

export const TOKEN_KEY = "@Emoframe-Token";
export const EMAIL = "@Emoframe-Email";
export const USERTYPE = "@Emoframe-Usertype";

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

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getEmail = () => localStorage.getItem(EMAIL);
export const getUsertype = () => localStorage.getItem(USERTYPE);


export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const setEmail = (email) => localStorage.setItem(EMAIL, email);
export const setUsertype = (usertype) => localStorage.setItem(USERTYPE, usertype);

export const login = (data) => {
  setToken(data.access_token);
  setEmail(data.email);
  setUsertype(data.usertype);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EMAIL);
  localStorage.removeItem(USERTYPE);
};