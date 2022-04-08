import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Login from './LoginPage.js';
import moment from 'moment';
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
    const accessToken = localStorage.getItem('accessToken');
    const expireAt = localStorage.getItem('expiresAt');
    if (accessToken && moment(expireAt).diff(moment()) > 0) {
      navigate('/');
    }
  }, [navigate]); //맨처음 로딩 될 때 자동 로그인이 되어 있는지 확인
  return (
    <>
      <Header />
      <div className="content">
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
      <Link to="/users/register">
        <button style={{ background: 'black', width: '100px', marginTop: '10px' }} type="submit" className="btn_login" id="log.register">
          <span style={{ color: 'white' }} className="btn_text">
            회원가입
          </span>
        </button>
      </Link>
      <Footer />
    </>
  );
}
