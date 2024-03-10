import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MultiStep from './reviewModal/MultiStep';
import Step1 from './reviewModal/Step1';
import Step2 from './reviewModal/Step2';
import Step3 from './reviewModal/Step3';
import Step4 from './reviewModal/Step4';
import Step5 from './reviewModal/Step5';

const ReviewModal = () => {
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    setStep(1);
  }, []);

  return (
    <Container>
      <Modal>
        <MultiStep step={step} />
        <Content>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
        </Content>
      </Modal>
    </Container>
  );
};

export default ReviewModal;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #6f6f6f79;
  z-index: 20;
`;

const Modal = styled.div`
  width: 900px;
  height: 700px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme }) => theme.colors.font_black};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 20px;

  display: flex;
  gap: 20px;

  z-index: 21;
  transition: all 0.5s ease-in-out;
`;

const Content = styled.div`
  flex: 1;
`;
