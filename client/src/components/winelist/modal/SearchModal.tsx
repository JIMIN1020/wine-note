import React, { useState } from 'react';
import styled from 'styled-components';
import ResultBox from './ResultBox';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

type SearchModalProps = {
  setOpenSearchModal: (isOpen: boolean) => void;
};

const SearchModal = ({ setOpenSearchModal }: SearchModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [resultOpen, setResultOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  /* ----- vivino 검색 함수 ----- */
  const handleSearch = () => {
    setResultOpen(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResultOpen(true);
    }, 5000);
  };

  /* ----- 기록 작성하기 버튼 ----- */
  const handleWriteReview = () => {
    setOpenSearchModal(false);
    navigate('/review');
  };

  return (
    <Container>
      <Modal
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <SearchBox>
          <CloseBtn onClick={() => setOpenSearchModal(false)}>
            <GrClose />
          </CloseBtn>
          <Title>
            <h3>와인 검색하기</h3>
            <span>와인 기록을 작성하기 전, 와인 정보를 검색합니다.</span>
          </Title>
          <InputWrapper>
            <StyledInput
              type='text'
              placeholder='빈티지를 제외한 와인 이름을 영문으로 작성해주세요.'
            />
            <SearchButton whileTap={{ scale: 0.95 }} onClick={handleSearch}>
              {loading ? '...' : '검색하기'}
            </SearchButton>
          </InputWrapper>
        </SearchBox>
        {resultOpen && <ResultBox handleWriteReview={handleWriteReview} />}
      </Modal>
    </Container>
  );
};

export default SearchModal;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #49494979;
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled(motion.div)`
  width: 600px;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme }) => theme.colors.font_black};

  position: fixed;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  z-index: 21;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 210px;
  padding: 40px 30px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  position: relative;
`;

const CloseBtn = styled.button`
  display: flex;
  background: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.font_black};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: 600;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.font_gray};
  }
`;

const StyledInput = styled.input`
  width: 350px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border_gray};
  font-size: ${({ theme }) => theme.fontSize.sm};

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled(motion.button)`
  width: 100px;
  font-size: ${({ theme }) => theme.fontSize.base};
  background-color: ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.font_white};
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
`;
