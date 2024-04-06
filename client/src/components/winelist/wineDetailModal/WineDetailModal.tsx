import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';
import useClickOutside from '../../../hooks/useClickOutside';
import { modalBackgroundVariants } from '../../../styles/motionVariants';

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
      <Modal ref={ref} layoutId={layoutId}>
        d
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
  width: 900px;
  height: 700px;
  background-color: white;
  border-radius: 12px;
`;
