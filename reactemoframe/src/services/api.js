import axios from "axios";

const baseURL = 'http://localhost:5000/api/';

export const LoginAccount = async (json) => {
  var config = {
    method: 'post',
    url: `${baseURL}auth/login`,
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