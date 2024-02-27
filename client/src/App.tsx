import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { GlobalStyle } from './styles/GlobalStyle';
import styled from 'styled-components';
import Header from './components/common/Header';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);
  return (
    <>
      <GlobalStyle />
      {isLoggedIn ? (
        <ContainerWithHeader>
          <Header />
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
