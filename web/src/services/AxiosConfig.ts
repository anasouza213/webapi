import axios from 'axios';


const clientAPI = 
  axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: false,
    timeout: 0,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
   
  });

export default clientAPI;
