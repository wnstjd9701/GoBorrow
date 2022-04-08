import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutUser } from '../../../_actions/user_action';

function MainHeader() {
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
    alignItems: 'center',
    display: 'flex',
    margin: '0 30px',
  };
  const postLogOut = e => {
    dispatch(LogoutUser()).then(response => {
      if (response.payload.success) {
        navigate('/users/login');
      } else {
        alert('LogOut Error');
        navigate('/error');
      }
    });
  };
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
            marginRight: '50px',
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
      </div>
    </header>
  );
}

export default MainHeader;
