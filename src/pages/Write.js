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
        <Link to="/">dsa</Link>
      </button>
    </div>
  );
};

export default Points;
