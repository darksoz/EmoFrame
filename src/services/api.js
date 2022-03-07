import axios from 'axios';
import {getToken, setToken} from './auth';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : 'http://emoframeapi.herokuapp.com/api';

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

export const Register = async (json, userType) => {
  var config = {
    method: 'post',
    url: `${baseURL}/${userType}/register`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: json
  };

  console.log("Dados passados para a API => ", json);
  return new Promise((resolve, reject) => {
    axios(config)
    .then(function (response) {
      resolve(response);
    }).catch(function (error) {
      resolve(error.response);
    });
  });
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
      resolve(error.response);
    });
  });
}

export const LogoutAccount = async () => {
  var config = {
    method: 'post',
    url: `${baseURL}/auth/logout`,
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    }
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

export const SaveSamTest = async (json) => {
  
  var config = {
    method: 'post',
    url: `${baseURL}/sam/create`,
    headers: {
      'Authorization': `Bearer ${getToken()}`, 
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

export const SaveLeapTest = async (json) => {
  var config = {
    method: 'post',
    url: `${baseURL}/leap/create`,
    headers: {
      'Authorization': `Bearer ${getToken()}`, 
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

export const SaveSusTest = async (json) => {
  var config = {
    method: 'post',
    url: `${baseURL}/sus/create`,
    headers: {
      'Authorization': `Bearer ${getToken()}`, 
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

export const SaveTest = async (json, test) => {
  
  var config = {
    method: 'post',
    url: `${baseURL}/${test}/create`,
    headers: {
      'Authorization': `Bearer ${getToken()}`, 
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

export const GetTestData = async (instrument, id) => {
  
  var config = {
    method: 'get',
    url: `${baseURL}/${instrument}/${id}`,
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
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

export const GetTestsData = async (json, instrument) => {
  var config = {
    method: 'post',
    url: `${baseURL}/${instrument}`,
    headers: {
      'Authorization': `Bearer ${getToken()}`, 
      'Content-Type': 'application/json'
    },
    data: json,
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

export const GetResultsByName = async (instrument, name)=> {
  var config = {
    method: 'get',
    url: `${baseURL}/${instrument}/${name}`,
    headers: {
      'Authorization': `Bearer ${getToken()}`
    },
  };
  return new Promise((resolve, reject) => {
    axios(config)
    .then(function (response) {
      resolve(response);
    }).catch(function (error) {
      resolve(error);
    });
  });
}

export const GetResultTestById = async (instrument, id)=> {
  var config = {
    method: 'get',
    url: `${baseURL}/${instrument}/id/${id}`,
    headers: {
      'Authorization': `Bearer ${getToken()}`
    },
  };
  return new Promise((resolve, reject) => {
    axios(config)
    .then(function (response) {
      resolve(response);
    }).catch(function (error) {
      resolve(error);
    });
  });
}

export const GetTestResult = async (instrument, json) => {
  var config = {
    method: 'post',
    url: `${baseURL}/${instrument}/id`,
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    },
    data: json,
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