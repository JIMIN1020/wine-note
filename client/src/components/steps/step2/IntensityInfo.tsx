import React from 'react';
import styled from 'styled-components';
import { WineColor, WineColorIntensity } from '../../../types/wineColor';
import IntensityBox from './IntensityBox';
import { colorIntensity } from '../../../data/wineColorData';

type IntensityInfoProps = {
  colorData: WineColor;
  intensity: WineColorIntensity;
  setIntensity: (data: WineColorIntensity) => void;
};

const IntensityInfo = ({
  colorData,
  intensity,
  setIntensity,
}: IntensityInfoProps) => {
  return (
    <Container>
      <Title>색의 강도</Title>
      <ColorContainer>
        {colorIntensity.map((data) => {
          return (
            <IntensityBox
              key={data.id}
              colorData={colorData}
              intensityData={data}
              isSelected={intensity.id === data.id}
              onClick={() => setIntensity(data)}
            />
          );
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
