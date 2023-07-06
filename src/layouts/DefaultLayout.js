import styled from 'styled-components';

const DefaultLayout = ({ router }) => {
  return <MainContainer>{router}</MainContainer>;
};

export default DefaultLayout;

const MainContainer = styled.div`
  max-width: 393px;
  margin: 0 auto;
  height: 100vh;
`;
