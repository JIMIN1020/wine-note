import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';
import useClickOutside from '../../hooks/useClickOutside';
import { MdLogout, MdOutlinePersonOff } from 'react-icons/md';

interface Props {
  closeModal: () => void;
}

const ProfileModal = ({ closeModal }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null); // 모달에 대한 ref

  useClickOutside(ref, () => closeModal());

  return (
    <Modal
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <UserInfo>
        <h4>류지민</h4>
        <span>jimins4920@gmail.com</span>
      </UserInfo>
      <ButtonWrapper>
        <Button>
          <MdLogout size={20} />
          로그아웃
        </Button>
        <Button>
          <MdOutlinePersonOff size={22} />
          회원탈퇴
        </Button>
      </ButtonWrapper>
    </Modal>
  );
};

export default ProfileModal;

const Modal = styled(motion.div)`
  width: 180px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 12px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow.basic};
  color: ${({ theme }) => theme.colors.text_black};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  position: absolute;
  top: 45px;
  right: 0;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 0;

  & h4 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  & span {
    display: inline-block;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.text_gray};
    word-break: break-all;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg_white};
  font-size: ${({ theme }) => theme.fontSize.base};
  padding: 12px 0;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg_lightgray};
  }
`;
