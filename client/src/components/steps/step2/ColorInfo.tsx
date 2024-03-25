import React from 'react';
import styled from 'styled-components';
import ColorBox from './ColorBox';
import { wineColor } from '../../../data/wineColorData';
import { useFormContext } from 'react-hook-form';
import { WineColorDataType } from '../../../types/steps/step2';
import { getTypeFromLabel } from '../../../data/selectOptionData';

const ColorInfo = () => {
  const { watch } = useFormContext();
  const type = getTypeFromLabel(
    watch('step1[wineType]')
  ) as keyof WineColorDataType;

  return (
    <Container>
      <Title>와인의 색</Title>
      <ColorContainer>
        {wineColor[type].map((data) => {
          return <ColorBox key={data.id} colorData={data} />;
        })}
      </ColorContainer>
    </Container>
  );
};

export default ColorInfo;

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
