import React, { useState } from 'react';
import styled from 'styled-components';
import MultiStep from './reviewModal/MultiStep';
import Step1 from './reviewModal/Step1';
import Step2 from './reviewModal/Step2';
import Step3 from './reviewModal/Step3';
import Step4 from './reviewModal/Step4';
import Step5 from './reviewModal/Step5';
import { IoArrowForwardSharp } from 'react-icons/io5';

type ReviewModalProps = {
  setOpenModal: (isOpen: boolean) => void;
};

const ReviewModal = ({ setOpenModal }: ReviewModalProps) => {
  const [step, setStep] = useState<number>(1);

  const handleButtonClick = () => {
    if (step === 5) {
      // 제출
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <Container>
      <Modal>
        <MultiStep step={step} setOpenModal={setOpenModal} />
        <Content>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
          <BtnContainer>
            <Button onClick={handleButtonClick}>
              {step < 5 ? (
                <>
                  <span>다음</span>
                  <IoArrowForwardSharp />
                </>
              ) : (
                '기록 완료'
              )}
            </Button>
          </BtnContainer>
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
  background-color: #0000004a;
  z-index: 20;
`;

const Modal = styled.div`
  width: 900px;
  height: 650px;
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
  display: flex;
  flex-direction: column;
`;

const BtnContainer = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.wine_mid_purple};
  color: ${({ theme }) => theme.colors.font_white};
  padding: 10px 20px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  &:hover {
    scale: calc(1.05);
  }
`;
