import React from 'react';
import SubFormLayout from '@/components/layout/SubFormLayout';
import TextArea from '@/components/common/text/TextArea';

const AromaTextarea = () => {
  return (
    <SubFormLayout title='와인의 향'>
      <TextArea
        stepName='step3[aroma]'
        placeholder='와인에서 감지되는 향을 모두 적어보세요.'
        maxLength={200}
      />
    </SubFormLayout>
  );
};

export default AromaTextarea;
