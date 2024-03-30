import React from 'react';
import styled from 'styled-components';
import Step1 from '../steps/Step1';
import Step2 from '../steps/Step2';
import Step3 from '../steps/Step3';
import Step4 from '../steps/Step4';
import Step5 from '../steps/Step5';
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import { FormProvider, useForm } from 'react-hook-form';
import { wineTypeOptions } from '../../data/selectOptionData';
import { GrapeType } from '../../types/steps/step1';
import { CharacteristicType } from '../../types/steps/step4';

interface TastingFormType {
  step1: {
    wineName: string;
    wineType: string;
    price: number;
    country: string;
    regieon: string;
    grapes: GrapeType[];
  };
  step2: {
    color: string;
    colorIntensity: string;
  };
  step4: {
    characteristics: CharacteristicType;
    flavor: string;
  };
  step5: {
    rating: number;
    conclusion: string;
  };
}

interface ReviewBoxProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ReviewBox = ({ step, setStep }: ReviewBoxProps) => {
  const methods = useForm<TastingFormType>({
    defaultValues: {
      step1: {
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
      step2: {
        color: '#612a54',
        colorIntensity: 'Pale',
      },
      step4: {
        characteristics: {
          body: 3,
          sweetness: 3,
          tannin: 3,
          acidity: 3,
        },
      },
      step5: {
        rating: 0,
      },
    },
  });
  return (
    <Container>
      <ButtonBox>
        <StyledButton
          onClick={() => setStep((prev) => prev - 1)}
          disabled={step === 1}
        >
          <IoMdArrowBack />
        </StyledButton>
      </ButtonBox>

      <FormProvider {...methods}>
        <Form>
          <Wrapper $step={step}>
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
          </Wrapper>
        </Form>
      </FormProvider>

      <ButtonBox>
        <StyledButton
          onClick={() => setStep((prev) => prev + 1)}
          disabled={step === 5}
        >
          <IoMdArrowForward />
        </StyledButton>
      </ButtonBox>
    </Container>
  );
};

export default ReviewBox;

const Container = styled.div`
  display: flex;
  width: fit-content;
`;

const Form = styled.form`
  width: 100%;
  max-width: 720px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg_white};
  padding: 70px 0px;
  overflow: hidden;
`;

const Wrapper = styled.div<{ $step: number }>`
  width: fit-content;
  height: 100%;
  display: flex;
  transform: translate(${({ $step }) => `-${($step - 1) * 720}px`});
  transition: all 0.3s ease-in-out;
`;

const ButtonBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const StyledButton = styled.button<{ disabled: boolean }>`
  width: 48px;
  height: 54px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  border-radius: 50%;
  background-color: #ffffff22;

  & svg {
    width: 30px;
    height: 30px;
    color: ${({ theme, disabled }) =>
      disabled ? '#ffffff64' : theme.colors.font_white};
  }

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? '#ffffff22' : '#ffffff2d'};
  }
`;
