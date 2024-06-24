import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileModal from './ProfileModal';

function Profile() {
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  return (
    <ProfileIcon onClick={() => setOpenProfile((prev) => !prev)}>
      <AnimatePresence>
        {openProfile && (
          <ProfileModal closeModal={() => setOpenProfile(false)} />
        )}
      </AnimatePresence>
    </ProfileIcon>
  );
}

export default Profile;

const ProfileIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bg_white};
  position: relative;
  cursor: pointer;
`;
