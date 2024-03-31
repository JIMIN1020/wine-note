import React from 'react';
import styled from 'styled-components';
import ColorBox from './ColorBox';
import { wineColor } from '../../../data/steps/step2-data';
import { useFormContext } from 'react-hook-form';
import { WineColorDataType } from '../../../types/formType';
import { getTypeFromLabel } from '../../../data/selectOptionData';
import SubFormLayout from '../../layout/SubFormLayout';

const ColorInfo = () => {
  const { watch } = useFormContext();
  const type = getTypeFromLabel(
    watch('step1[wineType]')
  ) as keyof WineColorDataType;

  return (
    <SubFormLayout title='와인의 색'>
      <ColorContainer>
        {wineColor[type].map((data) => {
          return <ColorBox key={data.id} colorData={data} />;
        })}
      </ColorContainer>
    </SubFormLayout>
  );
};

export default ColorInfo;

const ColorContainer = styled.div`
  display: flex;
  gap: 20px;
`;
