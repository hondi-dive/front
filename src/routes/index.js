import { Route, Routes } from 'react-router-dom';

import Main from 'pages/Main';
import Main2 from 'pages/Main2';
import Feed from 'pages/Feed';

const Routes2 = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main2" element={<Main2 />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
};

export default Routes2;
