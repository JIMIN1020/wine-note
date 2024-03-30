import React from 'react';
import styled from 'styled-components';
import StepSubTitle from '../StepSubTitle';
import { useFormContext } from 'react-hook-form';
import { FormTextarea } from '../../../styles/FormTextarea';

const Conclusion = () => {
  const { register } = useFormContext();
  return (
    <Container>
      <StepSubTitle title='나의 평가' />
      <FormTextarea
        placeholder='이 와인에 대한 전체적인 평가를 남겨보세요.'
        {...register('step5[conclusion]')}
      />
    </Container>
  );
};

export default Conclusion;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;
`;
