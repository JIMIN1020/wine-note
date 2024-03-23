import React from 'react';
import styled from 'styled-components';
import ColorBox from './ColorBox';
import { WineColor } from '../../../types/wineColor';

type ColorInfoProps = {
  colorData: WineColor[];
  selectedColor: WineColor;
  setSelectedColor: (data: WineColor) => void;
};

const ColorInfo = ({
  colorData,
  selectedColor,
  setSelectedColor,
}: ColorInfoProps) => {
  return (
    <Container>
      <Title>와인의 색</Title>
      <ColorContainer>
        {colorData.map((data) => {
          return (
            <ColorBox
              key={data.id}
              colorData={data}
              isSelected={selectedColor.id === data.id}
              onClick={() => setSelectedColor(data)}
            />
          );
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
