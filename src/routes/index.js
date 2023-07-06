import { Route, Routes } from 'react-router-dom';

import Main from 'pages/Main';
import KakaoMap from 'pages/KakaoMap';
import Feed from 'pages/Feed';
import FeedDetail from 'pages/FeedDetail';

const Routes2 = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/points" element={<KakaoMap />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/feed/:id" element={<FeedDetail />} />
    </Routes>
  );
};

export default Routes2;
