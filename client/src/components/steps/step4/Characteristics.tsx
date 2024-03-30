import React from 'react';
import styled from 'styled-components';
import StepSubTitle from '../StepSubTitle';
import RangeInput from './RangeInput';
import { rangeInputData } from '../../../data/step4-data';

const Characteristics = () => {
  return (
    <Container>
      <StepSubTitle title='와인의 특성' />
      <InputContainer>
        {rangeInputData.map((data) => (
          <RangeInput key={data.id} data={data} />
        ))}
      </InputContainer>
    </Container>
  );
};

export default Characteristics;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
