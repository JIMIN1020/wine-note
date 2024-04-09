import React from 'react';
import styled from 'styled-components';

interface NoteSubTitleProps {
  title: string;
  sub: string;
}

const NoteSubTitle = ({ title, sub }: NoteSubTitleProps) => {
  return (
    <TitleBar>
      <Title>
        {title} <small>{sub}</small>
      </Title>
      <TitleLine />
    </TitleBar>
  );
};

export default NoteSubTitle;

const TitleBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;

  & small {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.font_gray};
    font-weight: 400;
    margin-left: 4px;
  }
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.font_black};
`;
