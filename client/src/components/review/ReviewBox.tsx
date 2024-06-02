import React from 'react';
import styled from 'styled-components';
import Step1 from '../steps/Step1';
import Step2 from '../steps/Step2';
import Step3 from '../steps/Step3';
import Step4 from '../steps/Step4';
import Step5 from '../steps/Step5';
import { IoMdArrowForward, IoMdArrowBack, IoMdCheckmark } from 'react-icons/io';
import { FormProvider, useForm } from 'react-hook-form';
import { wineTypeOptions } from '../../data/selectOptionData';
import { TastingFormType } from '../../types/formType';
import { motion } from 'framer-motion';
import { WineDataType } from '../../types/wineType';
import wineBottleImg from '../../assets/image/wine-bottle.svg';
import { wineAPI } from '../../apis/api/wine';
import { useNavigate } from 'react-router-dom';
import { AddWineNoteReq } from '../../types/api/request';

interface ReviewBoxProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  wineData: WineDataType;
}

const ReviewBox = ({ step, setStep, wineData }: ReviewBoxProps) => {
  const navigate = useNavigate();
  const methods = useForm<TastingFormType>({
    defaultValues: {
      step1: {
        wineName: wineData.name,
        wineImg: wineData.thumb || wineBottleImg,
        wineLink: wineData.link,
        country: wineData.country,
        region: wineData.region,
        price: 0,
        vintage: 2024,
        wineType: wineTypeOptions[0].id,
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
      step3: {
        aromaIntensity: 'Light',
        aroma: '',
      },
      step4: {
        characteristics: {
          body: 3,
          sweetness: 3,
          tannin: 3,
          acidity: 3,
        },
        flavor: '',
      },
      step5: {
        rating: 0,
        conclusion: '',
      },
    },
  });

  const { getValues } = methods;

  const handleClickRight = async () => {
    if (step === 5) {
      const data = getValues();

      const processedData: AddWineNoteReq = {
        wine: {
          name: data.step1.wineName,
          country: data.step1.country,
          region: data.step1.region,
          price: data.step1.price,
          url: data.step1.wineLink,
          img: data.step1.wineImg,
          vintage: data.step1.vintage,
          type: data.step1.wineType,
          grapes: data.step1.grapes,
        },
        review: {
          color: data.step2.color,
          color_intensity: data.step2.colorIntensity,
          aroma: data.step3.aroma,
          aroma_intensity: data.step3.aromaIntensity,
          flavor: data.step4.flavor,
          sweetness: data.step4.characteristics.sweetness,
          acidity: data.step4.characteristics.acidity,
          tannin: data.step4.characteristics.tannin,
          body: data.step4.characteristics.body,
          rating: data.step5.rating,
          conclusion: data.step5.conclusion,
        },
      };

      await wineAPI.addWineNote(processedData).then((res) => {
        if (res?.isSuccess) {
          navigate('/winelist');
        }
      });
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <Container>
      <ButtonBox>
        <StyledButton
          whileTap={{ scale: 0.92 }}
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
          whileTap={{ scale: 0.92 }}
          onClick={handleClickRight}
          disabled={false}
        >
          {step === 5 ? <IoMdCheckmark /> : <IoMdArrowForward />}
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

const StyledButton = styled(motion.button)<{ disabled: boolean }>`
  width: 48px;
  height: 54px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  border-radius: 50%;
  background-color: #ffffff22;

  & svg {
    width: 30px;
    height: 30px;
    color: ${({ theme, disabled }) =>
      disabled ? '#ffffff64' : theme.colors.text_white};
  }

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? '#ffffff22' : '#ffffff2d'};
  }
`;
