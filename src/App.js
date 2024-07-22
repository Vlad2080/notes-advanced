import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ThemeContext from './context/ThemeContext';
import HomePage from './pages/HomePage';
import CreateNotePage from './pages/CreateNotePage';
import EditNotePage from './pages/EditNotePage';
import LoginPage from './pages/LoginPage';
import './App.css'; // Импортируйте существующий файл App.css

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Provider store={store}>
      <Router>
        <div className={`appContainer ${theme}`}>
          <header>
            <h1>Advanced Note Taking App</h1>
            <button
              className="toggleButton"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              Toggle Theme
            </button>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/create">Create Note</Link>
              <Link to="/login">Login</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateNotePage />} />
            <Route path="/edit/:id" element={<EditNotePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
