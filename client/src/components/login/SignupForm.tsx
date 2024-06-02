import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormInput from '../common/FormInput';
import { FormButton } from '../../styles/FormButton';
import { motion } from 'framer-motion';
import { FormProvider, useForm } from 'react-hook-form';
import { userAPI } from '../../apis/api/user';

type SignUpFormType = {
  nickname: string;
  email: string;
  password: string;
  check: string;
};

const SignupForm = () => {
  const [canUse, setCanUse] = useState<boolean>(false);
  const [emailMsg, setEmailMsg] = useState<string>('');
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
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;

  const email = watch('email');
  const password = watch('password');

  useEffect(() => {
    setEmailMsg('');
    setCanUse(false);
  }, [email]);

  const handleJoin = async (data: SignUpFormType) => {
    if (canUse) {
      await userAPI
        .join({
          nickname: data.nickname,
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          if (res?.isSuccess) {
            window.alert('성공적으로 회원가입 되었습니다.');
            window.location.reload();
          }
        });
    } else {
      return;
    }
  };

  const checkEmail = async () => {
    if (email.trim()) {
      const result = await userAPI.checkEmail(email);
      setCanUse(result);
      setEmailMsg(
        result ? '사용 가능한 이메일입니다' : '이미 사용 중인 이메일입니다'
      );
    } else {
      return;
    }
  };

  return (
    <FormProvider {...methods}>
      <Container onSubmit={handleSubmit(handleJoin)}>
        <FormContainer>
          <Wrapper>
            <FormInput
              inputName='nickname'
              placeholder='닉네임을 입력해주세요. (최대 10자)'
              options={{
                required: true,
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
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '이메일 형식에 맞지 않습니다',
                  },
                }}
              />
              <CheckBtn
                type='button'
                onClick={checkEmail}
                whileTap={{ scale: 0.93 }}
              >
                중복 확인
              </CheckBtn>
            </WithButtonWrapper>
            <ErrorMsg $isOk={canUse}>
              {(errors.email && errors.email.message) || emailMsg}
            </ErrorMsg>
          </Wrapper>
          <Wrapper>
            <FormInput
              type='password'
              inputName='password'
              placeholder='8~15자리 영문, 숫자로 비밀번호를 입력해주세요'
              options={{
                required: true,
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
            <FormInput
              type='password'
              inputName='check'
              placeholder='비밀번호를 한번 더 입력해주세요'
              options={{
                required: true,
                validate: (value) =>
                  value === password || '비밀번호가 일치하지 않습니다',
              }}
            />
            <ErrorMsg>{errors.check && errors.check.message}</ErrorMsg>
          </Wrapper>
        </FormContainer>

        <FormButton>회원가입</FormButton>
      </Container>
    </FormProvider>
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

  &:hover {
    opacity: 0.95;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ErrorMsg = styled.span<{ $isOk?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ $isOk }) => ($isOk ? 'green' : 'red')};
  width: 100%;
  height: 15px;
  padding-left: 4px;
`;
