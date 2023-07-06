import Routes from 'routes';
import GlobalStyle from 'styles/reset';
import Layout from 'pages/Layout';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout router={<Routes />} />
    </>
  );
};

export default App;
