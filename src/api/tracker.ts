import axios from "axios";

export default axios.create({
    baseURL: 'http://9c73-186-99-1-30.ngrok.io',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  