import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from './action_type.js';

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
  try {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expiresAt');
    return {
      type: LOGOUT_USER,
      payload: { success: true },
    };
  } catch (err) {
    console.log(err);
    return {
      type: LOGOUT_USER,
      payload: { success: false },
    };
  }
}
