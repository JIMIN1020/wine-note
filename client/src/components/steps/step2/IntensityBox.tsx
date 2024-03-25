import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { WineColorIntensityType } from '../../../types/steps/step2';

interface IntensityBoxProps {
  intensityData: WineColorIntensityType;
}
const IntensityBox = ({ intensityData }: IntensityBoxProps) => {
  const { watch, setValue } = useFormContext();
  const selectedColor = watch('step2[color]');

  return (
    <Container
      type='button'
      $isSelected={watch('step2[colorIntensity]') === intensityData.name}
      onClick={() => setValue('step2[colorIntensity]', intensityData.name)}
    >
      <Color $color={selectedColor} $opacity={intensityData.opacity} />
      <ColorName>{intensityData.name}</ColorName>
    </Container>
  );
};

export default IntensityBox;

const Container = styled.button<{ $isSelected: boolean }>`
  width: 100px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: ${({ $isSelected, theme }) =>
    $isSelected ? `1px solid ${theme.colors.wine_purple}` : '1px solid white'};

  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 40px 0px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    scale: calc(1.05);
  }
`;

const Color = styled.div<{ $color: string; $opacity: number }>`
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  opacity: ${({ $opacity }) => $opacity};
`;

const ColorName = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
`;
