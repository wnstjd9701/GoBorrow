import axios from 'axios';
import Cookie from 'js-cookie';
import moment from 'moment';

const accessClient = axios.create({
  timeout: 180000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

accessClient.interceptors.request.use(async function (config) {
  const refreshToken = Cookie.get('refreshToken');
  let accessToken = localStorage.getItem('accessToken');
  const expireAt = localStorage.getItem('expiresAt');

  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    const body = {
      refreshToken,
    };

    const { data } = await axios.post('/auth/accessToken', body);

    accessToken = data.accessToken;
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('expiresAt', moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss'));
  }
  config.headers['accesstoken'] = accessToken;

  return config;
});

export default accessClient;
