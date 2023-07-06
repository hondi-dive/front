import TopNav from 'components/TopNav';
import styled from 'styled-components';

const FeedDetail = () => {
  return (
    <Container>
      <TopNav title="월평포구" />
      <FeedContainer>
        <FeedProfile>
          <FeedProfileImage src="https://cdn.pixabay.com/photo/2017/10/24/21/49/playing-cards-2886284_1280.png" />
          <FeedProfileName>CHERSISHER</FeedProfileName>
        </FeedProfile>
        <FeedContent>
          <img src="/img/sample-feed.png" width="100%" />
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
            🥽 스쿠버다이빙
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
            <span style={{ color: '#327AEB' }}>4</span>/5점
          </div>
        </div>
        홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합홍합
      </FeedContainer>
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
  margin: 20px;
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
