import axios from 'axios';
import {ID_KEY} from "../../constants";

const http = axios.create({
 /* baseURL: 'http://109.87.205.141:3000/api',*/
  baseURL: 'http://localhost:5000/api',
});

http.interceptors.request.use( config => {
    config.headers.authorization = sessionStorage.getItem( ID_KEY );
    return config;
} );

http.interceptors.request.use(
  config => {
    return Promise.resolve(config);
  });
http.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    return Promise.reject(error);
  });

export default http;