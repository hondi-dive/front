import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import * as S from 'components/pages/main/Main.style';

const Main = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (cookies.userId) {
        navigate('/points');
      } else {
        navigate('/login');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.MainContainer style={{ animationPlayState: isLoading ? 'running' : 'paused' }}>
      <S.TitleContainer>
        <img src="img/white-logo.png" alt="로고" width="230" />
      </S.TitleContainer>
      <S.MainTitle>水눌음(물 수 + 수눌음) 서비스</S.MainTitle>
      <S.MainDescription>
        제주도에서 물놀이 명당과 경험을
        <br />
        서로 공유하는 서비스입니다.
      </S.MainDescription>
      <S.MainImgContainer>
        <img src="img/main-img.png" alt="메인이미지" width="100%" />
      </S.MainImgContainer>
      <div style={{ backgroundColor: 'white', width: '100%', height: '100%' }} />
    </S.MainContainer>
  );
};

export default Main;
