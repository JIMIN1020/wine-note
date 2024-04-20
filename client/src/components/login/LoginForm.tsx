import React from 'react';
import styled from 'styled-components';
import { FormButton } from '../../styles/FormButton';
import FormInput from '../common/FormInput';
import { FormProvider, useForm } from 'react-hook-form';

type LoginFormType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const methods = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Container>
      <FormProvider {...methods}>
        <InputContainer>
          <FormInput inputName='email' placeholder='이메일을 입력해주세요' />
          <FormInput
            inputName='password'
            placeholder='비밀번호를 입력해주세요'
          />
        </InputContainer>
      </FormProvider>

      <FormButton disabled={false}>로그인</FormButton>
    </Container>
  );
};

export default LoginForm;

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;
