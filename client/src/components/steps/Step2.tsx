import React, { useState } from 'react';
import StepTitle from './StepTitle';
import { StepContainer } from '../../styles/GlobalStyle';
import styled from 'styled-components';
import ColorInfo from './step2/ColorInfo';
import IntensityInfo from './step2/IntensityInfo';
import { colorIntensity, wineColor } from '../../data/wineColorData';
import { WineColorIntensityType, WineColorType } from '../../types/steps/step2';

const Step2 = () => {
  const colorData = wineColor['white'];
  const [selectedColor, setSelectedColor] = useState<WineColorType>(
    colorData[0]
  );
  const [intensity, setIntensity] = useState<WineColorIntensityType>(
    colorIntensity[0]
  );
  return (
    <StepContainer>
      <StepTitle
        stepNum={2}
        title='와인의 색'
        description='와인의 색에 대해 평가해보세요.'
      />
      <Content>
        <ColorInfo
          colorData={colorData}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <IntensityInfo
          colorData={selectedColor}
          intensity={intensity}
          setIntensity={setIntensity}
        />
      </Content>
    </StepContainer>
  );
};

export default Step2;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
