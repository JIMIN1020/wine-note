import React, { useState } from 'react';
import styled from 'styled-components';
import { FormButton } from '../../styles/FormButton';
import FormInput from '../common/FormInput';

const LoginForm = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  return (
    <Container>
      <InputContainer>
        <FormInput
          inputName='EMAIL'
          value={value.email}
          setValue={(value) => setValue((prev) => ({ ...prev, email: value }))}
          placeholder='이메일을 입력해주세요'
        />
        <FormInput
          inputName='PASSWORD'
          value={value.password}
          setValue={(value) =>
            setValue((prev) => ({ ...prev, password: value }))
          }
          placeholder='비밀번호를 입력해주세요'
        />
      </InputContainer>

      <FormButton disabled={value.email === '' || value.password === ''}>
        로그인
      </FormButton>
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
