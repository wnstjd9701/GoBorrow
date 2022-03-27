import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { TOKEN_VERIFICATION_FAILURE } from './baseResponseStatus.js';
dotenv.config();
class jwtAuthorization {
  sign = (user) => {
    const payload = {
      // accessToken 에 들어갈 payload
      id: user.id,
      distinction: user.distinction,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '15m',
    });
  };
  verify = (accessToken) => {
    // access token 검증
    let decoded = null;
    try {
      decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
      return {
        isSuccess: true,
        id: decoded.id,
        distinction: decoded.distinction,
      };
    } catch (err) {
      return {
        isSuccess: false,
        name: err.name,
        message: err.message,
      };
    }
  };
  refresh = (user) => {
    return jwt.sign({ id: user.id, distinction: user.distinction }, process.env.JWT_SECRET, { expiresIn: '14 days' });
  };
  refreshVerify = (refreshToken, userId) => {
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, data) => {
      if (err) return res.send(TOKEN_VERIFICATION_FAILURE);
      // refreshToken을 검증한 data.id 와 매개변수로 받은 accessToken을 decoded한 정보가 같을 경우
      if (data.id === userId.id && data.distinction === userId.distinction) {
        return {
          isSuccess: true,
          id: userId.id,
          distinction: userId.distincation,
        };
      } else {
        return {
          isSuccess: false,
          name: err.name,
          message: err.message,
        };
      }
    });
  };
}
export default new jwtAuthorization();
