import { useNavigate } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';

const BottomNav = ({ title, actionName, action }) => {
  const navigate = useNavigate();

  return (
    <div>
      <NavbarMainContainer>
        <NavbarContainer>
          <GoHomeFill
            className="icon"
            size="30"
            color="#327AEB"
            cursor="pointer"
            onClick={() => {
              navigate('/points');
            }}
          />
          <AiFillPlusCircle
            className="icon"
            size="60"
            color="#327AEB"
            cursor="pointer"
            onClick={() => {
              navigate('/write');
            }}
          />

          <BsPerson
            className="icon"
            size="30"
            color="#327AEB"
            cursor="pointer"
            onClick={() => {
              navigate('/');
            }}
          />
        </NavbarContainer>
      </NavbarMainContainer>
    </div>
  );
};

export default BottomNav;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.8); /* Adjust the alpha value (0.9) to control the transparency */
  box-shadow: 0px 0px 12px 3px rgba(56, 56, 56, 0.1);
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  max-width: 396px;
  margin: 0 auto;
  z-index: 99;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  position: fixed;
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

export const NavbarMainContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  width: 100vw;
  border-radius: 20px;
`;
