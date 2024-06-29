import React from 'react';
import styled from 'styled-components';

interface Props {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  type?: 'row' | 'column';
}

const NoteItem = ({ icon, title, children, type = 'row' }: Props) => {
  return (
    <Container $isRow={type === 'row'}>
      <Title>
        {icon}
        <h4>{title}</h4>
      </Title>
      {children}
    </Container>
  );
};

export default NoteItem;

const Container = styled.div<{ $isRow: boolean }>`
  width: 100%;
  padding: 28px;
  display: flex;
  /* background-color: #f6f6f684; */
  /* box-shadow: ${({ theme }) => theme.shadow.basic}; */
  border: 1px solid #46007b53;
  border-radius: 12px;

  ${({ $isRow }) => {
    if ($isRow) {
      return {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      };
    } else {
      return {
        flexDirection: 'column',
        gap: '12px',
      };
    }
  }}

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
