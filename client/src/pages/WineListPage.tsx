import React, { useState } from 'react';
import styled from 'styled-components';
import TitleBox from '../components/winelist/TitleBox';
import Content from '../components/winelist/Content';
import SearchModal from '../components/winelist/modal/SearchModal';

const WineListPage = () => {
  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);

  /* ----- 모달 오픈 시 뒷배경 스크롤 방지 ----- */
  if (openSearchModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <Container>
      <TitleBox setOpenSearchModal={setOpenSearchModal} />
      <Content />
      {openSearchModal && (
        <SearchModal setOpenSearchModal={setOpenSearchModal} />
      )}
    </Container>
  );
};

export default WineListPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_white};
  display: flex;
  flex-direction: column;
`;
