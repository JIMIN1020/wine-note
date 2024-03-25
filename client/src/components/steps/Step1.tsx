import React from 'react';
import styled from 'styled-components';
import BasicInfo from './step1/BasicInfo';
import RegionInfo from './step1/RegionInfo';
import GrapeInfo from './step1/GrapeInfo';
import StepTitle from './StepTitle';
import { StepContainer } from '../../styles/GlobalStyle';

const Step1 = () => {
  return (
    <StepContainer>
      <StepTitle
        stepNum={1}
        title='와인 정보'
        description='와인에 대한 정보를 작성해주세요.'
      />
      <FormWrapper>
        <BasicInfo />
        <RegionInfo />
      </FormWrapper>
      <GrapeInfo />
    </StepContainer>
  );
};

export default Step1;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
