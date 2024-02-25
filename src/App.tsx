import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { GlobalStyle } from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
