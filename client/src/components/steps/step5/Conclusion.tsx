import React from 'react';
import styled from 'styled-components';
import StepSubTitle from '../StepSubTitle';
import { useFormContext } from 'react-hook-form';

const Conclusion = () => {
  const { register } = useFormContext();
  return (
    <Container>
      <StepSubTitle title='나의 평가' />
      <TextArea
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
