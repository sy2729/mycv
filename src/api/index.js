import axios from 'axios';
import config from './config';

axios.defaults.baseURL = config.baseUrl;

export const getCVBtnState = ()=>{
  return axios.get('/cv-btn')
    .then(res=>res.data)
}