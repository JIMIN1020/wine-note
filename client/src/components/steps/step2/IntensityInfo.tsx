import React from 'react';
import styled from 'styled-components';
import IntensityBox from './IntensityBox';
import { colorIntensity } from '@/data/color';
import SubFormLayout from '@/components/layout/SubFormLayout';

const IntensityInfo = () => {
  return (
    <SubFormLayout title='색의 강도'>
      <ColorContainer>
        {colorIntensity.map((data) => {
          return <IntensityBox key={data.id} intensityData={data} />;
        })}
      </ColorContainer>
    </SubFormLayout>
  );
};

export default IntensityInfo;

const ColorContainer = styled.div`
  display: flex;
  gap: 20px;
`;
