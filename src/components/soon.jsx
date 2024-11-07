import React from 'react';

const ComingSoon = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Coming Soon</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #ff6b6b, #f0e68c)',
  },
  text: {
    fontSize: '3rem',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
};

export default ComingSoon;
