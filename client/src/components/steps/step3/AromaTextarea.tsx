import React from 'react';
import { FormTextarea } from '../../../styles/FormTextarea';
import SubFormLayout from '../../layout/SubFormLayout';

const AromaTextarea = () => {
  return (
    <SubFormLayout title='와인의 향'>
      <FormTextarea placeholder='와인에서 감지되는 향을 모두 적어보세요.' />
    </SubFormLayout>
  );
};

export default AromaTextarea;
