import axios from 'axios';
import moment from 'moment';

const accessClient = axios.create({
  timeout: 180000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

accessClient.interceptors.request.use(async function (config) {
  let accessToken = localStorage.getItem('accessToken');
  const expireAt = localStorage.getItem('expiresAt');
  if (!accessToken || moment(expireAt).diff(moment()) < 0) {
    const { data } = await axios.get('/auth/token');
    if (data.isSuccess) {
      accessToken = data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('expiresAt', moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss'));
    } else {
      alert(data.message);
      window.location.href = '/app/users/login';
    }
  }
  config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});

export default accessClient;
