import React from 'react';

const Error = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f8f8',
    }}>
      <div style={{
        textAlign: 'center',
      }}>
        <h1 style={{
          color: '#ff0000',
        }}>Oops! Page Not Found</h1>
        <p>It seems like you've stumbled upon a page that doesn't exist.</p>
        <p>Let's get you back on track:</p>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
        }}>
          <li>Check the URL for typos</li>
          <li>Return to the <a href="/" style={{
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize:"15px"
          }}>homepage</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Error;
