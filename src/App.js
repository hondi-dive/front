import Routes from 'routes';
import GlobalStyle from 'styles/reset';
import DefaultLayout from 'layouts/DefaultLayout';
import './App.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout router={<Routes />} />
    </>
  );
};

export default App;
