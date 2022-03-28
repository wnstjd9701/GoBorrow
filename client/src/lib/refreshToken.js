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
    //refresh 존재, access만료인데 refresh 유효기간은 몰라
    const { data } = await axios.post('/auth/token');

    if (data.isSuccess) {
      accessToken = data.token.accessToken;
      if (data.token.refreshToken) localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('expiresAt', moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss'));
    } else {
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');
    }
  }
  config.headers['authorization'] = `Bearer ${accessToken}`; //access 유효, refresh는 없거나 있거나 -> access 만료가 됐는데, refredsh가 없어

  return config; //access도 없고 refresh도 없는 상태면, 형이 애초에 jwt middelw ware 유효성 부분에서 로그인 하라고 반환을 던지겠네 = 세션만료
});

export default accessClient;
