// src/pages/MaintenancePage.jsx
import React from 'react';
import MainLogo from '/images/mitraprabhutva.png';

const MaintenancePage = () => {
  return (
    <div style={styles.container}>
      <img src={MainLogo} alt="Logo" style={{ width: 300 }}></img>
      <h1 style={styles.title}>We'll Be Back Soon</h1>
      <p style={styles.message}>
        Sorry for the inconvenience. We're performing some maintenance at the
        moment.
        <br />
        We'll be back online shortly!
      </p>
      <div style={styles.spinner}></div>
      <footer style={styles.footer}>
        &copy; 2025 Mitra Prabhutva Utama. All rights reserved.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f4f4f4',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: 20,
  },
  message: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: 30,
  },
  spinner: {
    border: '6px solid #eee',
    borderTop: '6px solid #00a8ff',
    borderRadius: '50%',
    width: 40,
    height: 40,
    animation: 'spin 1s linear infinite',
  },
  footer: {
    marginTop: 30,
    fontSize: '0.9rem',
    color: '#aaa',
  },
};

export default MaintenancePage;
