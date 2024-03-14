import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { GlobalStyle } from './styles/GlobalStyle';
import styled from 'styled-components';
import Header from './components/common/Header';
import WineListPage from './pages/WineListPage';
import AnalysisPage from './pages/AnalysisPage';

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
            <Route path='/' element={<HomePage />} />
            <Route path='/winelist' element={<WineListPage />} />
            <Route path='/analysis' element={<AnalysisPage />} />
          </Routes>
        </ContainerWithHeader>
      ) : (
        <Container>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
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
  display: flex;
  justify-content: center;
`;
