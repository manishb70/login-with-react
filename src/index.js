import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Layout from './Layout';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Github from './components/Github';
import Profile from './components/Profile';
import NoteState from './context/NoteState';
import NoteContext from './context/NoteContext';
import { useContext } from 'react';
import ProtectedRoute from './context/protectedRoute';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NoteState>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/github/:userId" element={<Github />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
          </Route>
        </Routes>
      </NoteState>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
