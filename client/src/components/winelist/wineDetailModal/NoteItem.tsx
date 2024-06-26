import React from 'react';
import styled from 'styled-components';

interface Props {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const NoteItem = ({ icon, title, children }: Props) => {
  return (
    <Container>
      <Title>
        {icon}
        <h4>{title}</h4>
      </Title>
      {children}
    </Container>
  );
};

export default NoteItem;

const Container = styled.div`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.wine_mid_purple};
  border-radius: 12px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 600;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.wine_mid_purple};

  & h4 {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 500;
  }
`;
