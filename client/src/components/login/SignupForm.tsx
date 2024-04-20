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
  pwCheck: string;
};

const SignupForm = () => {
  const methods = useForm<SignUpFormType>({
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      pwCheck: '',
    },
  });
  return (
    <Container>
      <FormProvider {...methods}>
        <FormContainer>
          <Wrapper>
            <FormInput
              inputName='nickname'
              placeholder='닉네임을 입력해주세요. (최대 10자)'
            />
            <ErrorMsg></ErrorMsg>
          </Wrapper>
          <Wrapper>
            <WithButtonWrapper>
              <FormInput
                inputName='email'
                placeholder='이메일을 입력해주세요'
              />
              <CheckBtn type='button' whileTap={{ scale: 0.93 }}>
                중복 확인
              </CheckBtn>
            </WithButtonWrapper>
            <ErrorMsg></ErrorMsg>
          </Wrapper>
          <Wrapper>
            <FormInput
              inputName='password'
              placeholder='8~15자리 영문 소문자, 숫자로 비밀번호를 입력해주세요'
            />
            <ErrorMsg></ErrorMsg>
          </Wrapper>
          <Wrapper>
            <WithButtonWrapper>
              <FormInput
                inputName='check'
                placeholder='비밀번호를 한번 더 입력해주세요'
              />
              <CheckBtn type='button' whileTap={{ scale: 0.93 }}>
                비밀번호 확인
              </CheckBtn>
            </WithButtonWrapper>
            <ErrorMsg></ErrorMsg>
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
  color: ${({ theme }) => theme.colors.font_white};
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
