import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ResultBox from './ResultBox';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import useClickOutside from '../../../hooks/useClickOutside';
import { IoSearchSharp } from 'react-icons/io5';
import Button from '../../common/Button';

type SearchModalProps = {
  setOpenSearchModal: (isOpen: boolean) => void;
};

const SearchModal = ({ setOpenSearchModal }: SearchModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [resultOpen, setResultOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  /* ----- 모달 바깥 클릭 시 닫힘 처리 ----- */
  useClickOutside(ref, () => setOpenSearchModal(false));

  /* ----- vivino 검색 함수 ----- */
  const handleSearch = () => {
    setResultOpen(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResultOpen(true);
    }, 3000);
  };

  /* ----- 기록 작성하기 버튼 ----- */
  const handleWriteReview = () => {
    setOpenSearchModal(false);
    navigate('/review');
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Modal
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
        }}
      >
        <SearchBox>
          <Title>
            <h3>
              <IoSearchSharp size='24' />
              와인 검색하기
            </h3>
            <span>와인 기록을 작성할 와인을 검색합니다.</span>
          </Title>
          <InputWrapper>
            <StyledInput
              type='text'
              placeholder='빈티지를 제외한 와인 이름을 영문으로 작성해주세요.'
            />
            <Button text='검색하기' disabled={loading} onClick={handleSearch} />
          </InputWrapper>
        </SearchBox>
        <AnimatePresence>
          {resultOpen && <ResultBox handleWriteReview={handleWriteReview} />}
        </AnimatePresence>
      </Modal>
    </Container>
  );
};

export default SearchModal;

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2b2b2b94;
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
  padding: 40px 50px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  position: relative;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 8px;

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  & span {
    margin-bottom: 3px;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.font_gray};
  }
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border_gray};
  font-size: ${({ theme }) => theme.fontSize.sm};

  &:focus {
    outline: none;
  }
`;
