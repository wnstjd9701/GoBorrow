import axios from 'axios';
import { LOGIN_USER, REGISTER_USER } from './action_type.js';

export async function loginUser(dataToSubmit) {
  const request = await axios.post('/app/users/login', dataToSubmit).then(response => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export async function registerUser(dataToSubmit) {
  const request = await axios.post('/app/users/signUp', dataToSubmit).then(response => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}
