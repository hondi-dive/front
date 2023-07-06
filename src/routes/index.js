import { Route, Routes } from 'react-router-dom';

import Main from 'pages/Main';
import Login from 'pages/Login';
import Points from 'pages/Points';
import Feed from 'pages/Feed';
import FeedDetail from 'pages/FeedDetail';
import Write from 'pages/Write';

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/points" element={<Points />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/feed/:id" element={<FeedDetail />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  );
};

export default RoutesContainer;
