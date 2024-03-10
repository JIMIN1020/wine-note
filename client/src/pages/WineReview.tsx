import React, { useState } from 'react';
import styled from 'styled-components';
import TitleBox from '../components/wineReview/TitleBox';
import Content from '../components/wineReview/Content';
import SearchModal from '../components/wineReview/modal/SearchModal';
import ReviewModal from '../components/wineReview/modal/ReviewModal';

const WineReview: React.FC = () => {
  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);
  const [openReviewModal, setOpenReviewModal] = useState<boolean>(false);

  /* ----- 모달 오픈 시 뒷배경 스크롤 방지 ----- */
  if (openSearchModal || openReviewModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <Container>
      <TitleBox setOpenSearchModal={setOpenSearchModal} />
      <Content />
      {openSearchModal && (
        <SearchModal
          setOpenSearchModal={setOpenSearchModal}
          setOpenReviewModal={setOpenReviewModal}
        />
      )}
      {openReviewModal && <ReviewModal setOpenModal={setOpenReviewModal} />}
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
