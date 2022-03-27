import React from 'react';

export default function Footer() {
  const footer_style = {
    textAlign: 'center',
    fontSize: '12px',
    marginTop: '10px',
    marginBottom: '10px',
    fontWeight: '550',
  };
  return (
    <footer style={footer_style}>
      <span>©Dankook University`s GoBorrow Team.</span>
    </footer>
  );
}
