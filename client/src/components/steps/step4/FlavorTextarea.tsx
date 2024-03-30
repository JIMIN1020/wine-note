import React from 'react';
import styled from 'styled-components';
import StepSubTitle from '../StepSubTitle';
import { useFormContext } from 'react-hook-form';

const FlavorTextarea = () => {
  const { register } = useFormContext();
  return (
    <Container>
      <StepSubTitle title='와인의 맛' />
      <TextArea
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

const TextArea = styled.textarea`
  width: 500px;
  height: 200px;
  resize: none;
  border: 1px solid ${({ theme }) => theme.colors.border_gray};
  border-radius: 10px;
  padding: 20px;
  font-family: 'Pretendard';
  line-height: 160%;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.wine_purple};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
