import React, { useState } from 'react';
import styled from 'styled-components';
import TitleBox from '../components/wineReview/TitleBox';
import Content from '../components/wineReview/Content';
import SearchModal from '../components/wineReview/modal/SearchModal';

const WineReview: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  /* ----- 모달 오픈 시 뒷배경 스크롤 방지 ----- */
  if (openModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <Container>
      <TitleBox setOpenModal={setOpenModal} />
      <Content />
      {openModal && <SearchModal setOpenModal={setOpenModal} />}
    </Container>
  );
};

export default WineReview;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_white};
  display: flex;
  flex-direction: column;
`;
