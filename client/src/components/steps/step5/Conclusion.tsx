import React from 'react';
import SubFormLayout from '@/components/layout/SubFormLayout';
import TextArea from '@/components/common/text/TextArea';

const Conclusion = () => {
  return (
    <SubFormLayout title='나의 평가'>
      <TextArea
        stepName='step5[conclusion]'
        placeholder='이 와인에 대한 전체적인 평가를 남겨보세요.'
        maxLength={200}
      />
    </SubFormLayout>
  );
};

export default Conclusion;
