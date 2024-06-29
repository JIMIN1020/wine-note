import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';
import useClickOutside from '@/hooks/useClickOutside';
import { modalBackgroundVariants } from '@/styles/motionVariants';
import { CgNotes } from 'react-icons/cg';
import WineInfo from './WineInfo';
import AromaReview from './AromaReview';
import ColorReview from './ColorReview';
import FlavorReview from './FlavorReview';
import DeleteButton from './DeleteButton';
import { useWine } from '@/hooks/useWine';
import useModalStore from '@/store/modalStore';
import CharacteristicChart from './chart/CharacteristicChart';

const WineDetailModal = () => {
  const ref = useRef<HTMLDivElement | null>(null); // 모달에 대한 ref
  const setOpenWineModal = useModalStore((state) => state.setOpenWineModal);
  const { wineDetailData, isLoading, handleDelete } = useWine();

  /* ----- 모달 바깥 클릭 시 닫힘 처리 ----- */
  useClickOutside(ref, () => setOpenWineModal(false));

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
        {!isLoading && (
          <>
            <WineInfo />
            <Bar />
            <NoteWrapper>
              <NoteTitle>
                <CgNotes size={20} style={{ strokeWidth: '0.5px' }} />
                Tasting Note
              </NoteTitle>
              <div className='wrapper'>
                <ColorReview />
                <AromaReview />
                <CharacteristicChart />
                <FlavorReview />
                <Conclusion>
                  <h5>MY REVIEW</h5>
                  <p>{wineDetailData!.review.conclusion}</p>
                </Conclusion>
              </div>
            </NoteWrapper>
            <DeleteButton onClick={handleDelete} />
          </>
        )}
      </Modal>
    </Background>
  );
};

export default WineDetailModal;

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
  width: 800px;
  height: 850px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 12px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  color: ${({ theme }) => theme.colors.text_black};
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
  border: 1px solid ${({ theme }) => theme.colors.wine_mid_purple};
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
  gap: 48px;
  padding: 20px 10px;

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const Bar = styled.hr`
  height: 1px;
  border: 0.5px solid ${({ theme }) => theme.colors.border_gray};
  width: 100%;
`;
