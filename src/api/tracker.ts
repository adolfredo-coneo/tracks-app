import axios from 'axios';

export default axios.create({
  baseURL: 'http://97c4-186-99-1-30.ngrok.io',
  headers: {
    'Content-Type': 'application/json',
  },
});
