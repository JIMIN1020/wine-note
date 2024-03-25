import React from 'react';
import styled from 'styled-components';
import BasicInfo from './step1/BasicInfo';
import RegionInfo from './step1/RegionInfo';
import GrapeInfo from './step1/GrapeInfo';
import StepTitle from './StepTitle';
import { StepContainer } from '../../styles/GlobalStyle';
import { useForm, FormProvider } from 'react-hook-form';
import { GrapeType } from '../../types/steps/step1';
import { wineTypeOptions } from '../../data/selectOptionData';

interface Step1FormType {
  wineName: string;
  wineType: string;
  price: number;
  country: string;
  regieon: string;
  grapes: GrapeType[];
}

const Step1 = () => {
  const methods = useForm<Step1FormType>({
    defaultValues: {
      country: 'France',
      regieon: 'Bourdeux',
      price: 0,
      wineType: wineTypeOptions[0].label,
      grapes: [
        {
          name: '',
          percent: 0,
        },
      ],
    },
  });
  return (
    <StepContainer>
      <FormProvider {...methods}>
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
      </FormProvider>
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
