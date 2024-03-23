import React from 'react';
import styled from 'styled-components';

// import Flag from '../../common/Flag';
import { IoEarth } from 'react-icons/io5';
import {
  LabelInput,
  LabelInputWrapper,
  StyledInput,
  StyledInputLabel,
} from '../../../styles/CustomInputs';

const RegionInfo = () => {
  return (
    <Container>
      <Wrapper>
        <StyledInputLabel>
          <span>국가</span>
          <LabelInputWrapper>
            <LabelInput type='text' />
            <FlagIcon>
              <IoEarth />
              {/* <Flag countryName='USA' size='22px' /> */}
            </FlagIcon>
          </LabelInputWrapper>
        </StyledInputLabel>
        <StyledInputLabel>
          <span>지역</span>
          <StyledInput type='text' />
        </StyledInputLabel>
      </Wrapper>
    </Container>
  );
};

export default RegionInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const FlagIcon = styled.div`
  position: absolute;
  top: 7px;
  left: 12px;

  & svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.border_gray};
  }
`;
