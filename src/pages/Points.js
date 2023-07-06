import { Link } from 'react-router-dom';

import KakaoMap from 'components/pages/map/KakaoMap';

const Points = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <KakaoMap />
      <Link to="/write">
        <button
          style={{
            position: 'absolute',
            bottom: 10,
            zIndex: 9999,
            width: 100,
            height: 50,
            left: 10,
          }}
        >
          글쓰기
        </button>
      </Link>
    </div>
  );
};

export default Points;
