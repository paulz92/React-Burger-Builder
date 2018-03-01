import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-3eac9.firebaseio.com'
});

export default instance;