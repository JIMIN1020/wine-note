import React from 'react';
import styled from 'styled-components';
import RangeInput from './RangeInput';
import { rangeInputData } from '@/data/range';
import SubFormLayout from '@/components/layout/SubFormLayout';

const Characteristics = () => {
  return (
    <SubFormLayout title='와인의 특성'>
      <InputContainer>
        {rangeInputData.map((data) => (
          <RangeInput key={data.id} data={data} />
        ))}
      </InputContainer>
    </SubFormLayout>
  );
};

export default Characteristics;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
