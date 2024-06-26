import React from 'react';
import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';

function DeleteButton({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...props}>
      <RiDeleteBin6Line size={18} />
      리뷰 삭제
    </Button>
  );
}

export default DeleteButton;

const Button = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_darkgray};
  cursor: pointer;

  padding: 12px 16px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #c3c3c338;
  }
`;
