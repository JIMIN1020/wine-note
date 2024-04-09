import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';
import useClickOutside from '../../../hooks/useClickOutside';
import { modalBackgroundVariants } from '../../../styles/motionVariants';
import { CgNotes } from 'react-icons/cg';

import WineInfo from './WineInfo';
import AromaReview from './AromaReview';
import ColorReview from './ColorReview';
import FlavorReview from './FlavorReview';

interface WineDetailModalProps {
  setSelectedWine: React.Dispatch<React.SetStateAction<string | null>>;
}

const WineDetailModal = ({ setSelectedWine }: WineDetailModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null); // 모달에 대한 ref

  /* ----- 모달 바깥 클릭 시 닫힘 처리 ----- */
  useClickOutside(ref, () => setSelectedWine(null));

  return (
    <Background
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Modal
        ref={ref}
        initial={{ opacity: 0.5, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        <WineInfo />
        <Conclusion>
          <h5>MY REVIEW</h5>
          <p>
            미국 와인을 좋아하는 사람들이라면 반드시 구매해서 마셔봐야 할 와인.
            <br />
            부드러운 타닌과 풍부한 과일향이 최고!
          </p>
        </Conclusion>
        <NoteWrapper>
          <NoteTitle>
            <CgNotes size={20} style={{ strokeWidth: '0.5px' }} />
            Tasting Note
          </NoteTitle>
          <ColorReview />
          <AromaReview />
          <FlavorReview />
        </NoteWrapper>
      </Modal>
    </Background>
  );
};

export default WineDetailModal;

const Background = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled(motion.div)`
  width: 800px;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 12px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  color: ${({ theme }) => theme.colors.font_black};
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NoteTitle = styled.h2`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
`;

const Conclusion = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.wine_light_purple};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  gap: 12px;

  & h5 {
    color: ${({ theme }) => theme.colors.wine_purple};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 500;
  }

  & p {
    text-align: center;
    line-height: 150%;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const NoteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 30px 0;
`;