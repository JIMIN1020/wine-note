import React from 'react';
import styled from 'styled-components';
import StepSubTitle from '../StepSubTitle';
import { useFormContext } from 'react-hook-form';
import { FormTextarea } from '../../../styles/FormTextarea';

const FlavorTextarea = () => {
  const { register } = useFormContext();
  return (
    <Container>
      <StepSubTitle title='와인의 맛' />
      <FormTextarea
        placeholder='와인에서 감지되는 맛을 모두 적어보세요.'
        {...register('step4[flavor]')}
      />
    </Container>
  );
};

export default FlavorTextarea;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;
`;
