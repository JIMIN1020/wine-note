import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  disabled: boolean;
  onClick: () => void;
}

const Button = ({ text, disabled, onClick }: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled(motion.button)`
  width: fit-content;
  padding: 10px 22px;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.font_white};
  border-radius: 12px;
  cursor: pointer;
`;
