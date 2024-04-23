import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '../components/review/SideBar';
import ButtonBar from '../components/review/ButtonBar';
import ReviewBox from '../components/review/ReviewBox';
import { useLocation } from 'react-router-dom';

const ReviewPage = () => {
  const [step, setStep] = useState<number>(1);
  const { state } = useLocation();
  return (
    <Container>
      <SideBar step={step} />
      <ReviewBox step={step} setStep={setStep} wineData={state} />
      <ButtonBar />
    </Container>
  );
};

export default ReviewPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.wine_purple};
`;
