import { Link } from 'react-router-dom';
import styled from 'styled-components';
import KakaoMap from 'components/pages/map/KakaoMap';
import SearchPoint, { StyledInput } from 'components/pages/map/SearchPoint';

const Points = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >

      <KakaoMap />
      <SearchPoint />
      <Link to="/write">
        <StyledButton>
          + 나의 로그 작성하기
        </StyledButton>
      </Link>
    </div>
  );
};

export default Points;


export const StyledButton = styled.button`    
    display: flex;
    width: 260px;
    height: 64px;
    padding: 18px 40px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 100px;
    background: #FF7334;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    position: absolute;
    left: 80px;
    top: 650px;
    z-index: 9999;
`;

