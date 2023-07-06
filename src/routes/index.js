import { Route, Routes } from 'react-router-dom';

import Main from 'pages/Main';
import Login from 'pages/Login';
import Points from 'pages/Points';
import Feed from 'pages/Feed';
import FeedDetail from 'pages/FeedDetail';
import Write from 'pages/Write';
import Log from 'pages/Log';
import Mypage from 'pages/Mypage';

const staticServerUri = process.env.REACT_APP_PATH || '';

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path={staticServerUri + '/'} element={<Main />} />
      <Route path={staticServerUri + '/login'} element={<Login />} />
      <Route path={staticServerUri + '/points'} element={<Points />} />
      <Route path={staticServerUri + '/feed'} element={<Feed />} />
      <Route path={staticServerUri + '/feed/:id'} element={<FeedDetail />} />
      <Route path={staticServerUri + '/logs/:id'} element={<Log />} />
      <Route path={staticServerUri + '/write'} element={<Write />} />
      <Route path={staticServerUri + '/mypage'} element={<Mypage/>} />
    </Routes>
  );
};

export default RoutesContainer;
