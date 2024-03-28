import React from 'react';
import styled from 'styled-components';
import IntensityBox from './IntensityBox';
import { colorIntensity } from '../../../data/step2-data';
import StepSubTitle from '../StepSubTitle';

const IntensityInfo = () => {
  return (
    <Container>
      <StepSubTitle title='색의 강도' />
      <ColorContainer>
        {colorIntensity.map((data) => {
          return <IntensityBox key={data.id} intensityData={data} />;
        })}
      </ColorContainer>
    </Container>
  );
};

export default IntensityInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 20px;
`;
