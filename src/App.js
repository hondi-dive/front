import Routes from 'routes';
import GlobalStyle from 'styles/reset';
import Layout from 'pages/Layout';
import DefaultLayout from 'layouts/DefaultLayout';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout router={<Routes />} />
      <DefaultLayout router={<Routes />} />
    </>
  );
};

export default App;
