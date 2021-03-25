import axios from 'axios';

import { HOST } from '../config';

export const login = (username, password) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${HOST}/api/authentication`, {
        username,
        password,
      })
      .then(res => {
        console.log(res);
        if (res.data.success) {
          sessionStorage.setItem('jwtToken', res.data.data.token);
        }
        return resolve(res.data);
      })
      .catch(error => reject(error.response));
  });
