import React, { useState, useEffect } from 'react';
import Footer from '../../Public/Footer/Footer.js';
import Header from '../../Public/Header/Header.js';
import Login from './LoginPage.js';
import moment from 'moment';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginLandingPage() {
  let navigate = useNavigate();
  const [distinc, setDistinc] = useState(1);
  const getOnPage = e => {
    if (e.currentTarget.id === 'register') {
      const login = document.getElementById('loginid');
      login.className = 'menu_id';
      login.setAttribute('aria-selected', 'false');
      e.currentTarget.className = 'menu_register on';
      e.currentTarget.setAttribute('aria-selected', 'true');
      setDistinc(2);
    } else {
      const register = document.getElementById('register');
      register.className = 'menu_register';
      register.setAttribute('aria-selected', 'false');
      e.currentTarget.className = 'menu_id on';
      e.currentTarget.setAttribute('aria-selected', 'true');
      setDistinc(1);
    }
  };
  useEffect(() => {
    async function checkLogin() {
      let accessToken = localStorage.getItem('accessToken');
      const expireAt = localStorage.getItem('expiresAt');
      if (accessToken && moment(expireAt).diff(moment()) > 0) {
        navigate('/');
      } else if (!accessToken || moment(expireAt).diff(moment()) < 0) {
        const { data } = await axios.get('/auth/token');
        if (data.isSuccess) {
          accessToken = data.accessToken;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('expiresAt', moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss'));
          navigate('/');
        }
      }
    }
    checkLogin();
  }, []); //맨처음 로딩 될 때 자동 로그인이 되어 있는지 확인
  return (
    <>
      <Header />
      <div style={{ marginTop: '0' }} className="content">
        <div className="login_wrap">
          <ul className="menu_wrap" role="tablist">
            <li className="menu_item" role="presentation">
              <a id="loginid" className="menu_id on" onClick={getOnPage} href="#none" role="tab" aria-selected="true">
                <span className="menu_text">
                  <span className="text">로그인(개인)</span>
                </span>
              </a>
            </li>
            <li className="menu_item" role="presentation">
              <a id="register" className="menu_register" onClick={getOnPage} href="#none" role="tab" aria-selected="true">
                <span className="menu_text">
                  <span className="text">로그인(기업)</span>
                </span>
              </a>
            </li>
          </ul>
          <Login name={distinc} />
        </div>
      </div>
      <button style={{ background: 'black', width: '100px', marginTop: '10px' }} type="submit" className="btn_login" id="log.register">
        <Link to="/users/register">
          <span style={{ color: 'white' }} className="btn_text">
            회원가입
          </span>
        </Link>
      </button>
      <Footer />
    </>
  );
}
