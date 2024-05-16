import React from 'react';
import styled from 'styled-components';
import { FormButton } from '../../styles/FormButton';
import FormInput from '../common/FormInput';
import { FormProvider, useForm } from 'react-hook-form';
import { userAPI } from '../../apis/api/user';
import { useNavigate } from 'react-router-dom';

type LoginFormType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const methods = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { handleSubmit } = methods;

  const handleLogin = async (data: LoginFormType) => {
    const result = await userAPI.login(data.email, data.password);
    if (result) {
      navigate('/');
    }
  };

  return (
    <FormProvider {...methods}>
      <Container onSubmit={handleSubmit(handleLogin)}>
        <InputContainer>
          <FormInput
            inputName='email'
            placeholder='이메일을 입력해주세요'
            options={{ required: true }}
          />
          <FormInput
            type='password'
            inputName='password'
            placeholder='비밀번호를 입력해주세요'
            options={{ required: true }}
          />
        </InputContainer>

        <Wrapper>
          <ErrorMsg></ErrorMsg>
          <FormButton type='submit' disabled={false}>
            로그인
          </FormButton>
        </Wrapper>
      </Container>
    </FormProvider>
  );
};

export default LoginForm;

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ErrorMsg = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: red;
  width: 100%;
  height: 15px;
  text-align: center;
  padding-left: 4px;
`;
