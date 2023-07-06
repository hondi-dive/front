import styled from 'styled-components';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import TopNav from 'components/TopNav';

const Navbar = () => {
  return (
    <div>
      <TopNav
        title="나의 로그 작성하기"
        actionName="저장"
        action={() => {
          onFinish();
        }}
      />
      <NavbarContainer>
        <MdNavigateBefore className="icon" size="30" color="black" />
        <NavbarPosition>월평포구</NavbarPosition>
        <MdNavigateNext className="icon" size="30" color="white" />
      </NavbarContainer>
    </div>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 0px 12px 3px rgba(56, 56, 56, 0.1);
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

const NavbarPosition = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
`;
