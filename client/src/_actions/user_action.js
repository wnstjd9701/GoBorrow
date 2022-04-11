import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, SEARCH_ORG } from './action_type.js';

export async function loginUser(dataToSubmit) {
  const request = await axios.post('/app/users/login', dataToSubmit).then(response => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export async function registerUser(dataToSubmit) {
  const request = await axios.post('/app/users', dataToSubmit).then(response => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export async function LogoutUser() {
  const request = await axios.post('/app/users/logout').then(response => response.data);
  localStorage.removeItem('accessToken');
  localStorage.removeItem('expiresAt');
  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export async function searchKeyword(dataToSubmit) {
  const request = await axios.get('/app/organization', dataToSubmit).then(response => response.data);
  return {
    type: SEARCH_ORG,
    payload: request,
  };
}
