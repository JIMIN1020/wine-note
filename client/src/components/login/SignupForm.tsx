import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../common/FormInput';
import { FormButton } from '../../styles/FormButton';
import { motion } from 'framer-motion';

const SignupForm = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const [pwCheck, setPwCheck] = useState('');

  return (
    <Container>
      <InputContainer>
        <Wrapper>
          <WithButtonWrapper>
            <FormInput
              inputName='EMAIL'
              value={value.email}
              setValue={(value) =>
                setValue((prev) => ({ ...prev, email: value }))
              }
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
            inputName='PASSWORD'
            value={value.password}
            setValue={(value) =>
              setValue((prev) => ({ ...prev, password: value }))
            }
            placeholder='8~15자리 영문 소문자, 숫자로 비밀번호를 입력해주세요'
          />
          <ErrorMsg></ErrorMsg>
        </Wrapper>
        <Wrapper>
          <WithButtonWrapper>
            <FormInput
              inputName='PASSWORD CHECK'
              value={pwCheck}
              setValue={(value) => setPwCheck(value)}
              placeholder='비밀번호를 한번 더 입력해주세요'
            />
            <CheckBtn type='button' whileTap={{ scale: 0.93 }}>
              비밀번호 확인
            </CheckBtn>
          </WithButtonWrapper>
          <ErrorMsg></ErrorMsg>
        </Wrapper>
      </InputContainer>

      <Wrapper>
        <ErrorMsg></ErrorMsg>
        <FormButton>회원가입</FormButton>
      </Wrapper>
    </Container>
  );
};

export default SignupForm;

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 60px 0 40px 0;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
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
