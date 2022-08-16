import axios from 'axios';

const host = window.location.origin;
console.log(host);

export const api = axios.create({

  baseURL: `${host}/api`,
})