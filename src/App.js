import Routes from 'routes';
import GlobalStyle from 'styles/reset';
import DefaultLayout from 'layouts/DefaultLayout';
import KakaoMap from 'pages/KakaoMap';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout router={<Routes />} />
      <KakaoMap />
    </>
  );
};

export default App;
