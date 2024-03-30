import React from 'react';
import StepSubTitle from '../StepSubTitle';
import styled from 'styled-components';
import { aromaIntensity } from '../../../data/step3-data';

const AromaIntensity = () => {
  return (
    <Container>
      <StepSubTitle title='향의 강도' />
      <Content>
        {aromaIntensity.map((data) => {
          return (
            <IntensityBtn type='button' key={data.id}>
              <Type>{data.type}</Type>
              <span>{data.desc}</span>
            </IntensityBtn>
          );
        })}
      </Content>
    </Container>
  );
};

export default AromaIntensity;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;
`;

const Type = styled.div`
  width: 100px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const IntensityBtn = styled.button`
  width: 400px;
  padding: 12px 16px;
  display: flex;

  text-align: start;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 40px 0px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    scale: calc(1.03);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;