import React from 'react';
import styled from 'styled-components';
import BasicInfo from './step1/BasicInfo';
import RegionInfo from './step1/RegionInfo';
import GrapeInfo from './step1/GrapeInfo';

const Step1 = () => {
  return (
    <Container>
      <TitleBox>
        <StepNum>1</StepNum>
        <h2>와인 정보</h2>
        <span>와인에 대한 정보를 작성해주세요.</span>
      </TitleBox>
      <FormWrapper>
        <BasicInfo />
        <RegionInfo />
      </FormWrapper>
      <GrapeInfo />
    </Container>
  );
};

export default Step1;

const Container = styled.div`
  width: 720px;
  height: 100%;
  padding: 0 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const StepNum = styled.div`
  width: 35px;
  height: 35px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.font_white};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 600;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
