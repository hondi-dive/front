import { useNavigate } from 'react-router-dom';
import { MdNavigateBefore } from 'react-icons/md';
import styled from 'styled-components';

const TopNav = ({ title, actionName, action }) => {
  const navigate = useNavigate();

  return (
    <div>
      <NavbarContainer>
        <MdNavigateBefore
          className="icon"
          size="30"
          color="black"
          onClick={() => {
            navigate(-1);
          }}
        />
        <NavbarPosition>{title}</NavbarPosition>
        <NavbarAction
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#426BFF',
          }}
          onClick={action}
        >
          {actionName}
        </NavbarAction>
      </NavbarContainer>
    </div>
  );
};

export default TopNav;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 64px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 0px 12px 3px rgba(56, 56, 56, 0.1);
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  max-width: 393px;
  margin: 0 auto;
  z-index: 99;
  padding: 0 24px;
`;

export const NavbarPosition = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
`;

export const NavbarAction = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: '#426BFF';
  cursor: pointer;
`;
