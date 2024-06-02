import React from 'react';
import styled from 'styled-components';

interface TextLineProps {
  title: string;
  text?: string;
}

const TextLine = ({ title, text }: TextLineProps) => {
  return (
    <LineWrapper $noText={!text}>
      <LineTitle>{title}</LineTitle>
      <Text>{text}</Text>
    </LineWrapper>
  );
};

export default TextLine;

const LineWrapper = styled.div<{ $noText: boolean }>`
  width: ${({ $noText }) => ($noText ? 'fit-content' : '100%')};
  display: flex;
  align-items: start;
  gap: 10px;
`;

const LineTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`;

const Text = styled.p`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 140%;
  word-break: break-all;
`;
