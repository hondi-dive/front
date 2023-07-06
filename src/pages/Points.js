import { Link } from 'react-router-dom';
import styled from 'styled-components';
import KakaoMap from 'components/pages/map/KakaoMap';
import SearchPoint, { StyledInput } from 'components/pages/map/SearchPoint';
import BottomNav from 'components/BottomNav';

const Points = () => {

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <KakaoMap />
      <SearchPoint />
      <BottomNav />
    </div>
  );
};

export default Points;


