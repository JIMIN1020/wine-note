import React from 'react';
import styled from 'styled-components';

interface FormTitleProps {
  title: string;
  sub: string;
}

const FormTitle = ({ title, sub }: FormTitleProps) => {
  return (
    <Container>
      <h2>{title}</h2>
      <span>{sub}</span>
    </Container>
  );
};

export default FormTitle;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;

  & h2 {
    font-size: 34px;
    font-weight: 700;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;
