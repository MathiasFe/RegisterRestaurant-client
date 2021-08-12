import axios from 'axios';
import ApiUrlCall from '../util/apiUrlCall';

const API =  axios.create({baseURL:ApiUrlCall});

// passa o userId
API.interceptors.request.use((req) => {
  if (localStorage.getItem("@registreResProfile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("@registreResProfile")).token
    }`;
  }

  return req;
});

export const Cadastrar = (formData) => API.post("/usuario/cadastrar", formData)