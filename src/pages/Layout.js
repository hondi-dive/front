import styled from 'styled-components';

const Layout = ({ router }) => {
  return <MainContainer>{router}</MainContainer>;
};

export default Layout;

const MainContainer = styled.div`
  background-color: red;
  max-width: 396px;
  margin: 0 auto;
`;
