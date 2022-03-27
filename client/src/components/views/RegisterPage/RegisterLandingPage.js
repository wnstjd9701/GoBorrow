import React, { useState } from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import UserRegister from './UserRegisterPage';
import OrgRegister from './OrgRegisterPage';
import { Link } from 'react-router-dom';

export default function LoginLandingPage() {
  const [On, setOn] = useState('user');
  const getOnPage = e => {
    setOn(e.currentTarget.id);
    if (e.currentTarget.id === 'org') {
      const login = document.getElementById('user');
      login.className = 'menu_id';
      login.setAttribute('aria-selected', 'false');
      e.currentTarget.className = 'menu_register on';
      e.currentTarget.setAttribute('aria-selected', 'true');
    } else {
      const register = document.getElementById('org');
      register.className = 'menu_register';
      register.setAttribute('aria-selected', 'false');
      e.currentTarget.className = 'menu_id on';
      e.currentTarget.setAttribute('aria-selected', 'true');
    }
  };
  return (
    <>
      <Header />
      <div className="content">
        <div className="register_wrap">
          <ul className="menu_wrap" role="tablist">
            <li className="menu_item" role="presentation">
              <a id="user" className="menu_id on" onClick={getOnPage} href="#none" role="tab" aria-selected="true">
                <span className="menu_text">
                  <span className="text">회원가입(개인)</span>
                </span>
              </a>
            </li>
            <li className="menu_item" role="presentation">
              <a id="org" className="menu_register" onClick={getOnPage} href="#none" role="tab" aria-selected="true">
                <span className="menu_text">
                  <span className="text">회원가입(기업)</span>
                </span>
              </a>
            </li>
          </ul>
          {On === 'user' ? <UserRegister name="1" /> : <OrgRegister name="2" />}
        </div>
      </div>
      <Link to="/app/users/login">
        <button style={{ background: 'black', width: '100px', marginTop: '10px' }} type="submit" className="btn_login" id="log.register">
          <span style={{ color: 'white' }} className="btn_text">
            로그인
          </span>
        </button>
      </Link>
      <Footer />
    </>
  );
}
