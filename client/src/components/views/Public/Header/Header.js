/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../../../../App.css';

export default function Header() {
  const header_style = {
    cursor: 'pointer',
    margin: '0 auto',
    display: 'block',
  };
  return (
    <header style={{ backgroundColor: '#ffffff' }}>
      <img
        className="App-logo"
        style={header_style}
        src="https://ufwo.s3.ap-northeast-2.amazonaws.com/%EC%83%98%ED%94%8C%EB%A1%9C%EA%B3%A0.png"
        href="https://ufwo.s3.ap-northeast-2.amazonaws.com/%EC%83%98%ED%94%8C%EB%A1%9C%EA%B3%A0.png"
      ></img>
    </header>
  );
}
