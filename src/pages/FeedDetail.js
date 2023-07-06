import TopNav from 'components/TopNav';
import styled from 'styled-components';

const FeedDetail = () => {
  return (
    <Container>
      <TopNav title="광치기 해변" />
      <FeedContainer>
        <FeedProfile>
          <FeedProfileImage src="https://cdn.pixabay.com/photo/2017/10/24/21/49/playing-cards-2886284_1280.png" />
          <FeedProfileName>CHERSISHER</FeedProfileName>
        </FeedProfile>
        <FeedContent>
            <img src="/img/sample-feed.png"></img>
        </FeedContent>
      </FeedContainer>
    </Container>
  );
};

export default FeedDetail;

const Container = styled.div`
  background-color: #fafafa;
  padding-top: 60px;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
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

const FeedContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 
  border-radius: 30px;
  width: 100%;
`;