import React from 'react';
import styled from 'styled-components';
import NoteSubTitle from '../common/NoteSubTitle';

interface NoteLayoutProps {
  title: string;
  sub: string;
  children: React.ReactNode;
}

const NoteLayout = ({ title, sub, children }: NoteLayoutProps) => {
  return (
    <Container>
      <NoteSubTitle title={title} sub={sub} />
      {children}
    </Container>
  );
};

export default NoteLayout;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.colors.font_black};
`;
