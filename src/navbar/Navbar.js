const Navbar = () => {
    return (
        <NavbarContainer>
            <p>나의 로그 작성하기</p>
            <span>저장</span>
        </NavbarContainer>
    )
}

export default Navbar

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0 40px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background: white;
    border-bottom: 1px solid #E5E5E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;