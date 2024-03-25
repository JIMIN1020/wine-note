import React from 'react';
import styled from 'styled-components';
import { Line } from '../../../styles/GlobalStyle';
import GrapeInput from './GrapeInput';
import { AiOutlinePlus } from 'react-icons/ai';
import { useFieldArray, useFormContext } from 'react-hook-form';

const GrapeInfo = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'grapes',
  });

  return (
    <Container>
      <TitleBar>
        <h3>품종 정보</h3>
        <AddButton onClick={() => append({ name: '', percent: 0 })}>
          <AiOutlinePlus />
          품종 추가
        </AddButton>
      </TitleBar>
      <Line />
      <InputWrapper>
        {fields.map((field, i) => (
          <GrapeInput key={field.id} index={i} remove={remove} />
        ))}
      </InputWrapper>
    </Container>
  );
};

export default GrapeInfo;

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 600;
  }
`;

const AddButton = styled.button`
  padding: 8px 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.bg_lightgray};

  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e7e7e7;
  }
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
