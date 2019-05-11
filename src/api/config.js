const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

let baseUrl = env  === 'dev' ? 'http://localhost:3000/api' : 'https://mycv-backend.herokuapp.com/api';




export default {
  baseUrl
};