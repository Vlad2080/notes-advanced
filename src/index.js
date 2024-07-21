import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ThemeContext from './context/ThemeContext';

const ThemedApp = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <App />
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemedApp />
  </React.StrictMode>,
  document.getElementById('root')
);
