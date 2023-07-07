import TopNav from "components/TopNav";
import React, { useState } from 'react';
import * as S from 'components/pages/mypage/Mypage.style';

const Mypage = () => {
  const [category, setCategory] = useState('SNORKEL');

  return (
    <div>
      <TopNav title="나의 로그" />
      <div style={{ height: 100 }} />

      <S.ProfileWrapper>
        <S.ProfileCircle>
            <S.ProfileImage src="./img/mypage.png" alt="Profile Image" />
        </S.ProfileCircle>
        <S.ProfileUsername>CHERSISHER</S.ProfileUsername>
    </S.ProfileWrapper>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        style={{
          width: '100%',
          maxWidth: 345,
          border: 'none',
          color: '#7F7F7F',
          fontSize: 18,
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          padding: 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          textAlign: 'center',
        }}
        value={category}
      >
        <option value="SNORKEL">스노클</option>
        <option value="FREEDIVING">프리다이빙</option>
        <option value="SCUBA">스쿠버</option>
      </select>

      <S.Title>내 로그 모아보기</S.Title>
      <S.Wrap>
        <S.Base
          src="./img/1.png"
          value="SNORKEL"
          style={{ display: category === 'SNORKEL' ? 'block' : 'none' }}
        ></S.Base>
        <S.Short
          src="./img/2.png"
          value="FREEDIVING"
          style={{ display: category === 'FREEDIVING' ? 'block' : 'none' }}
        ></S.Short>
        <S.Long
          src="./img/3.png"
          value="SNORKEL"
          style={{ display: category === 'SNORKEL' ? 'block' : 'none' }}
        ></S.Long>
        <S.Short
          src="./img/4.png"
          value="SCUBA"
          style={{ display: category === 'SCUBA' ? 'block' : 'none' }}
        ></S.Short>
        <S.Long
          src="./img/5.png"
          value="SNORKEL"
          style={{ display: category === 'SNORKEL' ? 'block' : 'none' }}
        ></S.Long>
        <S.Base
          src="./img/6.png"
          value="SCUBA"
          style={{ display: category === 'SCUBA' ? 'block' : 'none' }}
        ></S.Base>
      </S.Wrap>
    </div>
  );
}

export default Mypage;
