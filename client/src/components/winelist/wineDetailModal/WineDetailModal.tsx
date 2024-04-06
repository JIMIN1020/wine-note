import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';
import useClickOutside from '../../../hooks/useClickOutside';
import { modalBackgroundVariants } from '../../../styles/motionVariants';

import WineInfo from './WineInfo';
import AromaReview from './AromaReview';

interface WineDetailModalProps {
  layoutId: string;
  setSelectedWine: React.Dispatch<React.SetStateAction<string | null>>;
}

const WineDetailModal = ({
  layoutId,
  setSelectedWine,
}: WineDetailModalProps) => {
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
      <Modal ref={ref} layoutId={layoutId} exit={{ scale: 0 }}>
        <WineInfo />
        <Conclusion>
          <h5>MY REVIEW</h5>
          <p>
            미국 와인을 좋아하는 사람들이라면 반드시 구매해서 마셔봐야 할 와인.
            <br />
            부드러운 타닌과 풍부한 과일향이 최고!
          </p>
        </Conclusion>
        <AromaReview />
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
  background-color: #2b2b2b94;
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled(motion.div)`
  width: 800px;
  height: 800px;
  background-color: white;
  border-radius: 12px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 30px;
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
    line-height: 140%;
  }
`;
