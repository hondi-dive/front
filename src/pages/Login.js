import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import * as S from 'components/pages/main/Main.style';

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);

  return (
    <S.SubContainer>
      <S.TitleContainer>
        <img src="img/blue-logo.png" alt="로고" width="230" />
      </S.TitleContainer>
      <S.SubTitle>水눌음(물 수 + 수눌음) 서비스</S.SubTitle>
      <S.SubDescription>
        제주도에서 물놀이 명당과 경험을
        <br />
        서로 공유하는 서비스입니다.
      </S.SubDescription>
      <S.SubImgContainer>
        <img src="img/second-img.png" alt="메인이미지" width="100%" />
        <S.SocialLoginDescription>SNS 계정으로 간편 가입하기</S.SocialLoginDescription>
        <S.SocialLoginContainer>
          <input
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <div
            onClick={() => {
              setCookie('userId', userId, { path: '/', maxAge: 9999999999999 });
              navigate('/points');
            }}
          >
            제출
          </div>
        </S.SocialLoginContainer>
      </S.SubImgContainer>
    </S.SubContainer>
  );
};

export default Login;
