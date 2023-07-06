import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import TopNav from 'components/TopNav';
import { shareKakao } from 'utils/shareKakao';
import { fetchDetailLog } from 'apis/points';

const FeedDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState();

  const loadDetailLog = async () => {
    const res = await fetchDetailLog(id);

    setDetail(res);
  };

  useEffect(() => {
    loadDetailLog();
  }, [id]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  if (!detail) {
    return <div />;
  }

  console.log(detail);

  const dsa = (name) => {
    console.log(name);

    if (name === 'SCUBA') {
      return '스쿠버';
    }
    if (name === 'SNORKEL') {
      return '스노클';
    }
    if (name === 'FREEDIVING') {
      return '프리다이빙';
    }
  };

  return (
    <Container>
      <TopNav
        title="광치기 해변"
        actionName="공유하기"
        action={() => {
          const img = detail.imgUrl;
          shareKakao(img);
        }}
      />
      <FeedContainer>
        <FeedProfile>
          <FeedProfileImage src={detail.imgUrl} />
          <FeedProfileName>{detail.userName}</FeedProfileName>
        </FeedProfile>
        <FeedContent>
          <img src={detail.imgUrl} width="100%" />
        </FeedContent>
        <div
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '24px 0',
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              marginRight: 17,
            }}
          >
            🥽 {dsa(detail.category)}
          </div>
          <img
            src="/img/active-star.svg"
            width={24}
            height={24}
            style={{
              marginRight: 7,
            }}
          />
          <div>
            <span style={{ color: '#327AEB' }}>{detail.star}</span>/5점
          </div>
        </div>
        <div
          style={{
            width: '100%',
            marginBottom: 86,
          }}
        >
          {detail.text}
        </div>
      </FeedContainer>
      <div
        style={{
          width: '100%',
          height: 30,
          backgroundImage: 'linear-gradient(to top,white 0,rgba(7,187,123,0) 100%)',
          position: 'fixed',
          bottom: 72,
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          maxWidth: 393,
          padding: '0 24px',
        }}
      >
        <button
          style={{
            backgroundColor: '#327AEB',
            color: 'white',
            borderRadius: 16,
            width: '100%',
            padding: '16px 0',
            marginBottom: 24,
          }}
          onClick={() => {
            navigate(`/logs/${id}`);
          }}
        >
          로그기록 보러가기
        </button>
      </div>
    </Container>
  );
};

export default FeedDetail;

const Container = styled.div`
  padding-top: 60px;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: #fff;
  border-radius: 5px;
  margin: 20px 24px;
`;

const FeedProfile = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const FeedProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
`;

const FeedProfileName = styled.div`
  font-weight: bold;
  line-height: 40px;
`;

const FeedContent = styled.div``;
