import axios from 'axios';

const instance = axios.create({
  baseURL: "https://dating-app-backend-2.herokuapp.com/",
});

export default instance;