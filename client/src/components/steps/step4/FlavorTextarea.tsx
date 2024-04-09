import React from 'react';
import SubFormLayout from '../../layout/SubFormLayout';
import TextArea from '../../common/TextArea';

const FlavorTextarea = () => {
  return (
    <SubFormLayout title='와인의 맛'>
      <TextArea
        stepName='step4[flavor]'
        placeholder='와인에서 느껴지는 맛을 모두 적어보세요.'
        maxLength={200}
      />
    </SubFormLayout>
  );
};

export default FlavorTextarea;
