import axios from 'axios';
import {getToken, setToken} from './auth';

const baseURL = 'http://localhost:5000/api';


export const defineInterceptor = () =>{
  axios.interceptors.response.use(response => {
    return response
  }, err => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config
      if (err.response.status === 401 && err.config && !err.config._retry){
        originalReq._retry = true;
        let token = getToken();
        console.log("Trying to refresh token");
        let res = axios.put(`${baseURL}/token/refresh`, {oldToken: token})
        .then((res) => {
          setToken(res.data.access_token)
          originalReq.headers["Authorization"] = `Bearer ${res.data.access_token}`;
          console.log("Updating token");
          return axios(originalReq);
        });
        resolve(res);
      }
      else{
        console.log("Rejected demais");
        reject(err)
      }
    })
  })
}

export const LoginAccount = async (json) => {
  var config = {
    method: 'post',
    url: `${baseURL}/auth/login`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: json
  };
  return new Promise((resolve, reject) => {
    axios(config)
    .then(function (response) {
      resolve(response);
    }).catch(function (error) {
      reject(error);
    });
  });
}