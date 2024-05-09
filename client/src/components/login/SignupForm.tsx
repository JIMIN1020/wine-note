import React from 'react';
import styled from 'styled-components';
import FormInput from '../common/FormInput';
import { FormButton } from '../../styles/FormButton';
import { motion } from 'framer-motion';
import { FormProvider, useForm } from 'react-hook-form';

type SignUpFormType = {
  nickname: string;
  email: string;
  password: string;
  check: string;
};

const SignupForm = () => {
  const methods = useForm<SignUpFormType>({
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      check: '',
    },
    mode: 'onChange',
  });
  const {
    formState: { errors },
  } = methods;
  return (
    <Container>
      <FormProvider {...methods}>
        <FormContainer>
          <Wrapper>
            <FormInput
              inputName='nickname'
              placeholder='닉네임을 입력해주세요. (최대 10자)'
              options={{
                maxLength: {
                  value: 10,
                  message: '닉네임은 최대 10자입니다',
                },
              }}
            />
            <ErrorMsg>{errors.nickname && errors.nickname.message}</ErrorMsg>
          </Wrapper>
          <Wrapper>
            <WithButtonWrapper>
              <FormInput
                inputName='email'
                placeholder='이메일을 입력해주세요'
                options={{
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '이메일 형식에 맞지 않습니다',
                  },
                }}
              />
              <CheckBtn type='button' whileTap={{ scale: 0.93 }}>
                중복 확인
              </CheckBtn>
            </WithButtonWrapper>
            <ErrorMsg>{errors.email && errors.email.message}</ErrorMsg>
          </Wrapper>
          <Wrapper>
            <FormInput
              type='password'
              inputName='password'
              placeholder='8~15자리 영문, 숫자로 비밀번호를 입력해주세요'
              options={{
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
                  message: '영문, 숫자만 사용해주세요',
                },
                minLength: {
                  value: 8,
                  message: '8자리 이상 비밀번호를 사용하세요',
                },
                maxLength: {
                  value: 15,
                  message: '15자리 이하 비밀번호를 사용하세요',
                },
              }}
            />
            <ErrorMsg>{errors.password && errors.password.message}</ErrorMsg>
          </Wrapper>
          <Wrapper>
            <WithButtonWrapper>
              <FormInput
                type='password'
                inputName='check'
                placeholder='비밀번호를 한번 더 입력해주세요'
                options={{}}
              />
              <CheckBtn type='button' whileTap={{ scale: 0.93 }}>
                비밀번호 확인
              </CheckBtn>
            </WithButtonWrapper>
            <ErrorMsg>{errors.check && errors.check.message}</ErrorMsg>
          </Wrapper>
        </FormContainer>
      </FormProvider>

      <FormButton>회원가입</FormButton>
    </Container>
  );
};

export default SignupForm;

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 60px 0 40px 0;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 25px;
`;

const WithButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const CheckBtn = styled(motion.button)`
  border: none;
  width: 120px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ErrorMsg = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: red;
  width: 100%;
  height: 15px;
  padding-left: 4px;
`;
