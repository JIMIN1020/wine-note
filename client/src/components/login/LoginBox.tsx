import React from 'react';
import styled from 'styled-components';
import { StyledInput } from '../../styles/CustomInputs';

const LoginBox: React.FC = () => {
  return (
    <LoginContainer>
      <Box>
        <LoginTitle>
          <h2>Log In</h2>
          <span>로그인하고 와인 기록을 작성해보세요</span>
        </LoginTitle>
        <StyledInput type='text' />
        <span>둘러보기</span>
      </Box>
    </LoginContainer>
  );
};

export default LoginBox;

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
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  padding: 50px;
`;

const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;

  & h2 {
    font-size: 34px;
    font-weight: 700;
  }

  & span {
    color: ${({ theme }) => theme.colors.font_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

// const GoogleLogin = styled.input`
//   width: 200px;
//   border: 1px solid ${({ theme }) => theme.colors.border_gray};
//   padding: 8px 12px;
//   border-radius: 10px;
//   font-size: ${({ theme }) => theme.fontSize.base};
//   cursor: pointer;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;

//   & svg {
//     width: 22px;
//     height: 22px;
//   }

//   &:hover {
//     background-color: #f3f3f3;
//   }
// `;
