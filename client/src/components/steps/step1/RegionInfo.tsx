import React from 'react';
import styled from 'styled-components';
import { StyledInput, StyledInputLabel } from '../../../styles/GlobalStyle';
// import Flag from '../../common/Flag';
import { IoEarth } from 'react-icons/io5';

const RegionInfo = () => {
  return (
    <Container>
      <Wrapper>
        <StyledInputLabel>
          <span>국가</span>
          <InputWrapper>
            <LabelInput type='text' />
            <FlagIcon>
              <IoEarth />
              {/* <Flag countryName='USA' size='22px' /> */}
            </FlagIcon>
          </InputWrapper>
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

const LabelInput = styled(StyledInput)`
  width: 100%;
  padding-left: 42px;
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

const InputWrapper = styled.div`
  position: relative;
`;
