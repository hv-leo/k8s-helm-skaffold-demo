import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [message, setMessage] = useState(undefined);
  useEffect(() => {
    axios.get('http://localhost/server')
        .then(response => setMessage(response.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Front-end: Hi buddy! </p>
        <p> Back-end: {message} </p>
      </header>
    </div>
  );
};

export default App;
