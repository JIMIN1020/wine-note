import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { GlobalStyle } from './styles/GlobalStyle';
import styled from 'styled-components';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <>
      <GlobalStyle />
      {isLoggedIn ? (
        <ContainerWithHeader>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </ContainerWithHeader>
      ) : (
        <Container>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        </Container>
      )}
    </>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContainerWithHeader = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 70px;
`;
