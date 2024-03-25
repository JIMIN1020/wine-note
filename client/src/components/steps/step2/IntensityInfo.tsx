import React from 'react';
import styled from 'styled-components';
import IntensityBox from './IntensityBox';
import { colorIntensity } from '../../../data/wineColorData';

const IntensityInfo = () => {
  return (
    <Container>
      <Title>색의 강도</Title>
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

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 20px;
`;
