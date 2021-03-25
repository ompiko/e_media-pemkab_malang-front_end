import axios from 'axios';

import { HOST } from '../config';

export const table = (page = 1, limit = 10, sort = 'asc', search = '') =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/api/master/jenis-instansi?page=${page}&limit=${limit}&sort=${sort}&search=${search}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error.response));
  });

export const detail = id =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/api/master/jenis-instansi/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.data));
  });

export const store = data =>
  new Promise((resolve, reject) => {
    axios
      .post(`${HOST}/api/master/jenis-instansi`, data)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });

export const deleteSingle = id =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${HOST}/api/master/jenis-instansi/${id}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error.response));
  });

export const update = (id, data) =>
  new Promise((resolve, reject) => {
    axios
      .patch(`${HOST}/api/master/jenis-instansi/${id}`, data)
      .then(res => resolve(res.data))
      .catch(err => reject(err.data));
  });
