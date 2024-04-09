import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface TextAreaProps {
  placeholder: string;
  maxLength: number;
  stepName: string;
}

const TextArea = ({ placeholder, maxLength, stepName }: TextAreaProps) => {
  const { register, watch } = useFormContext();
  return (
    <Wrapper>
      <FormTextarea
        placeholder={placeholder}
        maxLength={maxLength}
        {...register(stepName, { required: true })}
      />
      <CharCount $isExceed={watch(stepName).length >= maxLength}>
        {watch(stepName).length}/{maxLength}
      </CharCount>
    </Wrapper>
  );
};

export default TextArea;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 6px;
`;

export const FormTextarea = styled.textarea`
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

const CharCount = styled.span<{ $isExceed: boolean }>`
  margin-right: 6px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme, $isExceed }) =>
    $isExceed ? 'red' : theme.colors.font_gray};
`;
