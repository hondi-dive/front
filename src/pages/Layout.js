import styled from 'styled-components';

const Layout = ({ router }) => {
  return <MainContainer>{router}</MainContainer>;
};

export default Layout;

const MainContainer = styled.div`
  max-width: 396px;
  margin: 0 auto;
  height: 100vh;
`;
