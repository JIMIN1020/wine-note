import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormTextarea } from '../../../styles/FormTextarea';
import SubFormLayout from '../../layout/SubFormLayout';

const Conclusion = () => {
  const { register } = useFormContext();
  return (
    <SubFormLayout title='나의 평가'>
      <FormTextarea
        placeholder='이 와인에 대한 전체적인 평가를 남겨보세요.'
        {...register('step5[conclusion]')}
      />
    </SubFormLayout>
  );
};

export default Conclusion;
