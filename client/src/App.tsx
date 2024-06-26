import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { GlobalStyle } from './styles/GlobalStyle';
import WineListPage from './pages/WineListPage';
import AnalysisPage from './pages/AnalysisPage';
import DefaultLayout from './components/layout/DefaultLayout';
import EmptyLayout from './components/layout/EmptyLayout';
import ReviewPage from './pages/ReviewPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/winelist' element={<WineListPage />} />
          <Route path='/analysis' element={<AnalysisPage />} />
        </Route>
        <Route element={<EmptyLayout />}>
          <Route path='/review' element={<ReviewPage />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<EmptyLayout />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
