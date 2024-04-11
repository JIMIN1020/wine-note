import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import Signup from './Signup';

const FormBox: React.FC = () => {
  const [signUp, setSignUp] = useState<boolean>(false);
  return (
    <LoginContainer>
      <Box>
        {signUp ? (
          <Signup setSignUp={setSignUp} />
        ) : (
          <Login setSignUp={setSignUp} />
        )}
      </Box>
    </LoginContainer>
  );
};

export default FormBox;

const LoginContainer = styled.div`
  width: 50%;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_black};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 600px;
  min-height: 600px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  padding: 60px 100px;
  transition: all 0.3s ease-in-out;
`;
