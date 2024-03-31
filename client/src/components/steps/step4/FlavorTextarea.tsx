import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormTextarea } from '../../../styles/FormTextarea';
import SubFormLayout from '../../layout/SubFormLayout';

const FlavorTextarea = () => {
  const { register } = useFormContext();
  return (
    <SubFormLayout title='와인의 맛'>
      <FormTextarea
        placeholder='와인에서 감지되는 맛을 모두 적어보세요.'
        {...register('step4[flavor]')}
      />
    </SubFormLayout>
  );
};

export default FlavorTextarea;
