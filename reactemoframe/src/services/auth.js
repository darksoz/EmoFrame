export const TOKEN_KEY = "@Emoframe-Token";
export const EMAIL = "@Emoframe-Email";
export const USERTYPE = "@Emoframe-Usertype";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getEmail = () => localStorage.getItem(EMAIL);
export const getUsertype = () => localStorage.getItem(USERTYPE);
export const login = (data) => {
  localStorage.setItem(TOKEN_KEY, data.access_token);
  localStorage.setItem(EMAIL, data.email);
  localStorage.setItem(USERTYPE, data.usertype);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EMAIL);
  localStorage.removeItem(USERTYPE);
};