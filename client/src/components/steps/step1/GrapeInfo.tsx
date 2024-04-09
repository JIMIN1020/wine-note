import React from 'react';
import styled from 'styled-components';
import GrapeInput from './GrapeInput';
import { AiOutlinePlus } from 'react-icons/ai';
import { useFieldArray, useFormContext } from 'react-hook-form';
import StepSubTitle from '../StepSubTitle';

const GrapeInfo = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'step1[grapes]',
  });

  return (
    <Wrapper>
      <StepSubTitle title='품종 정보' />
      <InputWrapper>
        {fields.map((field, i) => (
          <GrapeInput key={field.id} index={i} remove={remove} />
        ))}
        <AddButton
          type='button'
          onClick={() => append({ name: '', percent: 0 })}
        >
          <AiOutlinePlus size={15} />
        </AddButton>
      </InputWrapper>
    </Wrapper>
  );
};

export default GrapeInfo;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const AddButton = styled.button`
  width: 85%;
  height: 30px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;
  background-color: #f1f1f1;

  display: flex;
  align-items: center;
  justify-content: center;
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
