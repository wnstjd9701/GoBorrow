import React from 'react';

function MainHeader() {
  const header_style = {
    cursor: 'pointer',
    height: '15vmin',
    display: 'block',
    marginLeft: '20px',
  };
  const div_style = {
    textAlign: 'left',
  };
  return (
    <header>
      <div stlye={div_style}>
        <img
          className=""
          style={header_style}
          src="https://ufwo.s3.ap-northeast-2.amazonaws.com/%EC%83%98%ED%94%8C%EB%A1%9C%EA%B3%A0.png"
          href="https://ufwo.s3.ap-northeast-2.amazonaws.com/%EC%83%98%ED%94%8C%EB%A1%9C%EA%B3%A0.png"
          alt="header"
        ></img>
      </div>
    </header>
  );
}

export default MainHeader;
