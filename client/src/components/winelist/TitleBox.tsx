import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { defaultWidth } from '../../styles/GlobalStyle';
import { motion } from 'framer-motion';

type TitleBoxProps = {
  setOpenSearchModal: (isOpen: boolean) => void;
};

const TitleBox = ({ setOpenSearchModal }: TitleBoxProps) => {
  return (
    <TitleWrapper>
      <Wrapper>
        <PageTitle>
          <h2>와인 기록</h2>
          <span>내가 마신 와인을 기록하고 관리해보세요!</span>
        </PageTitle>
        <AddButton
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenSearchModal(true)}
        >
          <AiOutlinePlus />
          새로운 와인 기록 추가
        </AddButton>
      </Wrapper>
    </TitleWrapper>
  );
};

export default TitleBox;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  border-radius: 0 0 50px 50px;
`;

const Wrapper = styled.div`
  ${defaultWidth}
  padding: 60px 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & h2 {
    font-size: 28px;
    font-weight: 700;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const AddButton = styled(motion.button)`
  padding: 12px 20px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme }) => theme.colors.text_black};

  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  & svg {
    width: 18px;
    height: 18px;
  }
`;
