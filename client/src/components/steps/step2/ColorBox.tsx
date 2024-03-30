import React from 'react';
import styled from 'styled-components';
import { WineColorType } from '../../../types/formType';
import { useFormContext } from 'react-hook-form';

type ColorBoxProps = {
  colorData: WineColorType;
};

const ColorBox = ({ colorData }: ColorBoxProps) => {
  const { watch, setValue } = useFormContext();
  return (
    <Container
      type='button'
      $isSelected={watch('step2[color]') === colorData.code}
      onClick={() => setValue('step2[color]', colorData.code)}
    >
      <Color $color={colorData.code} />
      <ColorName>{colorData.colorName}</ColorName>
    </Container>
  );
};

export default ColorBox;

const Container = styled.button<{ $isSelected: boolean }>`
  width: 100px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 40px 0px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: ${({ $isSelected, theme }) =>
    $isSelected ? `1px solid ${theme.colors.wine_purple}` : '1px solid white'};

  &:hover {
    scale: calc(1.05);
  }
`;

const Color = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

const ColorName = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
`;
