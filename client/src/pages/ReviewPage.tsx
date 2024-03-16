import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '../components/review/SideBar';
import ButtonBar from '../components/review/ButtonBar';
import ReviewBox from '../components/review/ReviewBox';

const ReviewPage = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <Container>
      <SideBar step={step} />
      <ReviewBox step={step} />
      <ButtonBar setStep={setStep} />
    </Container>
  );
};

export default ReviewPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
