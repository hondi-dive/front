import { useState } from 'react';

import * as S from 'components/pages/main/Main.style';
import useTimeout from 'hooks/useTimeout';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.SubTitle>바다정보 공유 서비스</S.SubTitle>
        <S.Title>이거바당</S.Title>
      </S.TitleContainer>
      <S.SignupNotice>SNS 계정으로 간편 가입하기</S.SignupNotice>
      <S.SocialLoginContainer>
        <img src="img/kakao-login.png" alt="카카오로그인" />
      </S.SocialLoginContainer>

    </S.Container>
  );
};

export default Main;

