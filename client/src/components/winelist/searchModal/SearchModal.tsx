import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ResultBox from './ResultBox';
import { AnimatePresence, motion } from 'framer-motion';
import useClickOutside from '../../../hooks/useClickOutside';
import { IoSearchSharp } from 'react-icons/io5';
import { modalBackgroundVariants } from '../../../styles/motionVariants';
import { WineDataType } from '../../../types/wineType';
import { BeatLoader } from 'react-spinners';
import { wineAPI } from '../../../apis/api/wine';
import { getWineData } from '../../../apis/services/wine';

interface SearchModalProps {
  setOpenSearchModal: (isOpen: boolean) => void;
}

const SearchModal = ({ setOpenSearchModal }: SearchModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [resultOpen, setResultOpen] = useState<boolean>(false);
  const [wineName, setWineName] = useState<string>('');
  const [wineData, setWineData] = useState<WineDataType[] | undefined>(
    undefined
  );
  const [error, setError] = useState<boolean>(false);

  /* ----- 모달 바깥 클릭 시 닫힘 처리 ----- */
  useClickOutside(ref, () => setOpenSearchModal(false));

  useEffect(() => {
    if (wineData) {
      setResultOpen(true);
    }
  }, [wineData]);

  useEffect(() => {
    setError(false);
  }, [wineName]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  /* ----- vivino 검색 함수 ----- */
  const handleSearch = async () => {
    // 입력값 검증
    if (wineName.trim() === '') {
      return;
    }

    // 결과 리셋 + 로딩 시작
    setResultOpen(false);
    setLoading(true);

    // vivino api
    await wineAPI
      .getWineSearch(wineName)
      .then(getWineData)
      .then((res) => setWineData(res))
      .catch((err) => console.log(err));
  };

  return (
    <Background
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Modal
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          type: 'spring',
          stiffness: 300,
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
          <Wrapper>
            <InputWrapper>
              <StyledInput
                type='text'
                value={wineName}
                onKeyDown={handleKeyDown}
                onChange={(e) => setWineName(e.target.value)}
                placeholder='빈티지를 제외한 와인 이름을 영문으로 작성해주세요.'
              />
              <StyledButton
                disabled={loading}
                whileTap={{ scale: 0.95 }}
                onClick={handleSearch}
              >
                {loading ? (
                  <BeatLoader
                    color='#ffffff'
                    margin={2}
                    size={8}
                    speedMultiplier={0.7}
                  />
                ) : (
                  '검색하기'
                )}
              </StyledButton>
            </InputWrapper>
            <Message>{error ? '다시 시도해주세요' : ''}</Message>
          </Wrapper>
        </SearchBox>
        <AnimatePresence>
          {resultOpen && <ResultBox wineData={wineData} />}
        </AnimatePresence>
      </Modal>
    </Background>
  );
};

export default SearchModal;

const Background = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled(motion.div)`
  width: 600px;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme }) => theme.colors.text_black};

  position: fixed;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  z-index: 21;
`;

const SearchBox = styled.div`
  width: 100%;
  padding: 40px 50px 30px 50px;
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
    color: ${({ theme }) => theme.colors.text_gray};
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

const StyledButton = styled(motion.button)<{ disabled: boolean }>`
  width: fit-content;
  padding: 10px 22px;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.text_white};
  border-radius: 12px;
  cursor: pointer;
  padding: 10px ${({ disabled }) => (disabled ? '27px' : '22px')};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

const Message = styled.span`
  height: 12px;
  padding-left: 6px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: red;
`;
