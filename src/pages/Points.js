import BottomNav from 'components/BottomNav';
import KakaoMap from 'components/pages/map/KakaoMap';
import SearchPoint from 'components/pages/map/SearchPoint';

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
