import Routes from 'routes';
import GlobalStyle from 'styles/reset';
import DefaultLayout from 'layouts/DefaultLayout';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout router={<Routes />} />
    </>
  );
};

export default App;
