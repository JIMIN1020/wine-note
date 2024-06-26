import React from 'react';
import styled from 'styled-components';
import { RangeInputDataType } from '@/types/formType';
import { useFormContext } from 'react-hook-form';

interface RangeInputProps {
  data: RangeInputDataType;
}

const RangeInput = ({ data: { id, left, right } }: RangeInputProps) => {
  const { watch, setValue } = useFormContext();

  const handleSetValue = (num: number) => {
    setValue(`step4.characteristics[${id}]`, num);
  };

  return (
    <InputLine>
      <Label style={{ textAlign: 'end' }}>{left}</Label>
      <RangeBar>
        <Button type='button' onClick={() => handleSetValue(1)}>
          1
        </Button>
        <Button type='button' onClick={() => handleSetValue(2)}>
          2
        </Button>
        <Button type='button' onClick={() => handleSetValue(3)}>
          3
        </Button>
        <Button type='button' onClick={() => handleSetValue(4)}>
          4
        </Button>
        <Button type='button' onClick={() => handleSetValue(5)}>
          5
        </Button>
        <SelectBtn type='button' $num={watch(`step4.characteristics[${id}]`)}>
          {watch(`step4.characteristics[${id}]`)}
        </SelectBtn>
      </RangeBar>
      <Label style={{ textAlign: 'start' }}>{right}</Label>
    </InputLine>
  );
};

export default RangeInput;

const InputLine = styled.div`
  display: flex;
  gap: 16px;
`;

const RangeBar = styled.div`
  width: fit-content;
  border-radius: 12px;
  background-color: #e7e7e7;
  position: relative;
  overflow: hidden;
`;

const Button = styled.button`
  width: 80px;
  cursor: pointer;
  padding: 2px 0;
`;

const Label = styled.span`
  width: 40px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;
`;

const SelectBtn = styled.button<{ $num: number }>`
  width: 80px;
  padding: 2px 0;
  position: absolute;
  top: 0;
  left: ${({ $num }) => ($num - 1) * 80}px;
  transition: all 0.2s ease-in-out;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.text_white};
`;
