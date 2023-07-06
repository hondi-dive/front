import * as S from 'components/pages/feed/Feed.style';
;import { HiLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';
import TopNav from 'components/TopNav';
import GridLayout from "react-grid-layout";
import styled from "styled-components";

const layout = [
  { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
  { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
  { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
  { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
];

const GridItemWrapper = styled.div`
  background: #f5f5f5;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

const Feed = () => {
  // const images = [
  //   {
  //     id: 1,
  //     img: 'https://media.istockphoto.com/id/1364065231/ko/%EC%82%AC%EC%A7%84/%EA%B0%80%EB%8A%A5-%ED%95%98%EC%A7%80-%EA%B0%80%EB%8A%A5%ED%95%9C-%EA%B0%9C%EB%85%90%EC%9D%B4-%EC%9D%B4%EB%8B%A4.jpg?s=1024x1024&w=is&k=20&c=byN33Pr08qOzgJh9lsEoth5VjGaVDTmR1qtuM4zVPqY=',
  //   },
  //   {
  //     id: 2,
  //     img: 'https://media.istockphoto.com/id/1400865154/ko/%EC%82%AC%EC%A7%84/%EB%B3%B4%ED%97%98-%EB%B0%8F-%EC%9C%84%ED%97%98-%EA%B4%80%EB%A6%AC-%EA%B0%9C%EB%85%90.jpg?s=1024x1024&w=is&k=20&c=t8n8yIqkupfP5X5_Za6r9rUV7iH0ohBBBTlPkZgfEq0=',
  //   },
  //   {
  //     id: 3,
  //     img: 'https://cdn.pixabay.com/photo/2017/10/24/21/49/playing-cards-2886284_1280.png',
  //   },
  //   {
  //     id: 4,
  //     img: 'https://cdn.pixabay.com/photo/2017/01/22/21/33/gambling-2001035_1280.jpg',
  //   },
  //   {
  //     id: 5,
  //     img: 'https://cdn.pixabay.com/photo/2019/05/04/16/54/gambling-4178457_1280.jpg',
  //   },
  // ];

  return (
    <>
      <TopNav
        title="광치기 해변"
        actionName=""/>
    
    <S.Container>
      <S.Tag>
        <S.Icon>
          <HiLocationMarker className="icon" size="25" color="white" />
        </S.Icon>
        <S.Location>광치기 해변</S.Location>
      </S.Tag>
      <S.Title>에서는 이렇게 놀고있어요!</S.Title>
      <S.OptionContainer>
        <S.Option>스노쿨링</S.Option>
        <S.Option>프리다이빙</S.Option>
        <S.Option>스쿠버다이빙</S.Option>
      </S.OptionContainer>

      <S.GalleryContainer>
        <S.Gallery>
          {/* {images.map((image) => (
            <S.Image key={image.id} src={image.img} />
          ))} */}
        </S.Gallery>
      </S.GalleryContainer>
    </S.Container>
  </>
  );
};

export default Feed;

