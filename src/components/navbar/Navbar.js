import styled from 'styled-components'
import { MdNavigateBefore,MdNavigateNext } from "react-icons/md";

const Navbar = () => {
    return (
        <div>
            <NavbarContainer>
                <MdNavigateBefore className="icon" size="30" color="black"  />
                <NavbarPosition>광치기 해변</NavbarPosition>  
                <MdNavigateNext className="icon" size="30" color="white"  />
            </NavbarContainer>
        </div>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    width: 100%;
    height: 50px;
    flex-shrink: 0;
    background: #FFF;
    box-shadow: 0px 0px 12px 3px rgba(56, 56, 56, 0.10);
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
