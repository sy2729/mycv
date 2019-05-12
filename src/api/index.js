import axios from 'axios';
import config from './config';

axios.defaults.baseURL = config.baseUrl;
axios.defaults.withCredentials = true;

export const getCVBtnState = ()=>{
  return axios.get('/cv-btn')
    .then(res=>res.data)
}

export const getComments = (e)=> {
  let {num, from } = e;
  return axios.get(`/comments?${from !==undefined ? `from=${from}` : ''}${num ? `&num=${num}` : ''}`)
    .then(res=> {
      return res.data;
    })
    .catch(e=>e)
}

export const postComments = (e)=> {
  let {name, email, content, code} = e;
  return axios.post(`/comments?code=${code}`, {
    name, email, content
  }, {withCredentials: true})
    .then(res=> {
      return res.data;
    })
    .catch(e=>{
      console.log(e)
      return e
    })
}

export const getCode = ()=> {
  return axios.get(`/captcha`)
    .then(res=> {
      return res.data;
    })
    .catch(e=>e)
}
