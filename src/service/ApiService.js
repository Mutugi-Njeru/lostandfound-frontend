import axios from "axios";

const BASE_REST_API_URL='http://localhost:8080/';

export const loginUser = (auth) => {
    return axios.post(BASE_REST_API_URL + 'auth/request', {}, {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    });
  };


export const storeToken=(token)=>localStorage.setItem("token", token);
export const reportLostId=(idDetails)=> axios.post(BASE_REST_API_URL + 'lost/create', idDetails);
export const reportFoundId=(idDetails)=> axios.post(BASE_REST_API_URL + 'found/create', idDetails);