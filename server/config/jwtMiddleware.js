import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { TOKEN_EMPTY, TOKEN_VERIFICATION_FAILURE, TOKEN_VERIFICATION_SUCCESS } from './baseResponseStatus.js';
dotenv.config();

class jwtMiddleware {
  token = () => {
    return {
      access(id) {
        return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '15m',
        });
      },
      refresh(id) {
        return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
          expiresIn: '180 days',
        });
      },
    };
  };

  authentication = (req, res, next) => {
    let authHeader = req.headers['authorization'];
    const token = authHeader && req.headers.authorization.split('Bearer ')[1];
    if (!token) return res.send(baseResponse.TOKEN_EMPTY);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.send(baseResponse.TOKEN_VERIFICATION_FAILURE);

      req.user = user;
      next();
    });
  };
}
export default new jwtMiddleware();
