import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutUser } from '../../../../_actions/user_action';
import authAxios from '../../../../lib/refreshToken';

function MainHeader(props) {
  const [name, setName] = useState(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const header_style = {
    cursor: 'pointer',
    height: '15vmin',
    display: 'block',
  };
  const div_style = {
    textAlign: 'left',
  };
  const head_style = {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    display: 'flex',
    padding: '0 40px',
    marginBottom: '10px',
  };
  const postLogOut = e => {
    dispatch(LogoutUser()).then(response => {
      if (response.payload.isSuccess) {
        navigate('/users/login');
      } else {
        alert('LogOut Error');
        navigate('/error');
      }
    });
  };

  useEffect(() => {
    async function getProfile() {
      const profile = await authAxios.get('/app/users/profile');
      if (profile.data.isSuccess) {
        setName(profile.data.data.userName);
      }
    }
    getProfile();
  }, []);
  return (
    <header style={head_style}>
      <div stlye={div_style}>
        <img
          className=""
          style={header_style}
          src="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EB%A9%94%EC%9D%B8%EB%A1%9C%EA%B3%A0.png"
          href="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EB%A9%94%EC%9D%B8%EB%A1%9C%EA%B3%A0.png"
          alt="header"
        ></img>
      </div>
      <div
        style={{
          flexGrow: 1,
        }}
      >
        <Button
          style={{
            color: 'black',
            float: 'right',
          }}
          size="medium"
          variant="text"
          onClick={postLogOut}
        >
          LOGOUT
        </Button>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <Button
            style={{
              color: 'black',
              float: 'right',
            }}
            size="medium"
            variant="text"
          >
            HOME
          </Button>
        </Link>
        <span style={{ float: 'right', display: 'inline-flex', lineHeight: '1.75em', padding: '6px 8px' }}>
          <Link to="/users/myPage" style={{ textDecoration: 'none', color: 'green' }}>
            <b>{name}</b>
          </Link>
          님 환영합니다!
        </span>
      </div>
    </header>
  );
}

export default MainHeader;
