import Routes from 'routes';
import GlobalStyle from 'styles/reset';
import Layout from 'pages/Layout';
import KakaoMap from 'pages/KakaoMap';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout router={<Routes />} />
      <KakaoMap />
    </>
  );
};

export default App;
