import axios from "axios";

const baseURL = 'http://localhost:5000/api/';

export const LoginAccount = (json) => {
  var config = {
    method: 'post',
    url: `${baseURL}auth/login`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: json
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    }).catch((error)=> {console.log("bad request")});
}