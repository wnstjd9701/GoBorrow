import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LandingPage() {
  const TeamMember = [
    {
      name: '천재개발자 최지윤',
      github: 'J1Yun',
    },
    {
      name: '악마의재능 윤준성',
      github: 'wnstjd9701',
    },
    {
      name: '경력직신입 최한윤',
      github: 'chlgksdbs',
    },
    {
      name: '나 이성준',
      github: 'castlejun-2',
    },
  ];
  useEffect(() => {
    axios.post('/api/user/test').then(res => {
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '30px', marginBottom: '20px' }}>Lends Project</div>
      <div
        style={{
          textAlign: 'center',
          width: '500px',
          border: '3px solid red',
          margin: '0 auto',
          fontWeight: 700,
          fontSize: '30px',
          marginBottom: '20px',
        }}
      >
        Member
        <div style={{ width: '300px', margin: '0 auto', textAlign: 'center', 'background-color': 'black', color: 'white' }}>
          {TeamMember.map(element => (
            <div style={{ padding: '5px', border: '1px solid white', fontSize: '15px' }}>
              {element.name} <span style={{ fontSize: '12px' }}>({element.github})</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
