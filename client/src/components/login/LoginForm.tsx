import React, { useState } from 'react';
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
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const methods = useForm<LoginFormType>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { handleSubmit, watch } = methods;

  const handleLogin = async (data: LoginFormType) => {
    await userAPI
      .login({
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.isSuccess) {
          navigate('/');
        } else {
          setError('이메일 또는 비밀번호를 다시 확인해주세요');
        }
      });
  };

  const handleError = () => {
    setError('이메일 형식이 유효하지 않습니다');
  };

  return (
    <FormProvider {...methods}>
      <Container onSubmit={handleSubmit(handleLogin, handleError)}>
        <InputContainer>
          <FormInput
            inputName='email'
            placeholder='이메일을 입력해주세요'
            options={{
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: '이메일 형식이 유효하지 않습니다',
              },
            }}
          />
          <FormInput
            type='password'
            inputName='password'
            placeholder='비밀번호를 입력해주세요'
          />
        </InputContainer>

        <Wrapper>
          <ErrorMsg>{error}</ErrorMsg>
          <FormButton
            type='submit'
            disabled={Boolean(!watch('email') || !watch('password'))}
          >
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
