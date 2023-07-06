import * as S from 'components/pages/feed/Feed.style';
;import { HiLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';
import TopNav from 'components/TopNav';
import styled from "styled-components";
import { RxDividerVertical } from "react-icons/rx";

const Feed = () => {
  let positions = [
    {
      id: 1,
      title : '판포포구',
      content: '<div>판포포구</div>',
      latlng: new kakao.maps.LatLng(33.365216, 126.200269),
    },
    {
      id:2,
      title : '월령포구',
      content: '<div>월령포구</div>',
      latlng: new kakao.maps.LatLng(33.378558, 126.21632),
    },
    {
      id: 3,
      title : '범섬',
      content: '<div>범섬</div>',
      latlng: new kakao.maps.LatLng(33.218354, 126.516717),
    },
    {
      id: 4,
      title : '월평포구',
      content: '<div>월평포구</div>',
      latlng: new kakao.maps.LatLng(33.234152, 126.463248),
    },
    {
      id: 5,
      title : '황우지선녀탕',
      content: '<div>황우지선녀탕</div>',
      latlng: new kakao.maps.LatLng(33.239479, 126.548912),
    },
    {
      id: 6,
      title : '김녕해변',
      content: '<div>김녕해변</div>',
      latlng: new kakao.maps.LatLng(33.557752, 126.758989),
    },
    {
      id: 7,
      title : '중문해수욕장',
      content: '<div>중문해수욕장</div>',
      latlng: new kakao.maps.LatLng(33.243064, 126.412131),
    },
    {
      id: 8,
      title : '함덕해변',
      content: '<div>함덕해변</div>',
      latlng: new kakao.maps.LatLng(33.543495, 126.669673),
    },
    {
      id: 9,
      title : '이호테우해변',
      content: '<div>이호테우해변</div>',
      latlng: new kakao.maps.LatLng(33.498197, 126.45293),
    },
    {
      id: 10,
      title : '협재해변',
      content: '<div>협재해변</div>',
      latlng: new kakao.maps.LatLng(33.39439, 126.239582),
    },
  ];

  return (
    <>
      <TopNav
        title="월평포구"
        actionName=""/>
    
    <S.Container>
      <S.Tag>
        <S.Icon>
          <HiLocationMarker className="icon" size="25" color="white" />
        </S.Icon>
        <S.Location>월평포구</S.Location>
      </S.Tag>
      <S.Title>에서는 이렇게 놀고있어요!</S.Title>
      <S.OptionContainer>
        <S.Option>스노쿨링</S.Option>
        <RxDividerVertical 
        className="icon"
          size="30"
          color="black"/>
        <S.Option>프리다이빙</S.Option>
        <RxDividerVertical
        className="icon"
        size="30"
        color="black"
        />
        <S.Option>스쿠버다이빙</S.Option>
      </S.OptionContainer>

      {/* <S.GalleryContainer>
        <S.Gallery>
          {images.map((image) => (
            <S.Image key={image.id} src={image.img} />
          ))}
        </S.Gallery>
      </S.GalleryContainer> */}

    <S.Wrap>
      <S.Base src="/img/1.png"></S.Base>
      <S.Short src="/img/2.png"></S.Short>
      <S.Long src="/img/3.png"></S.Long>
      <S.Short src="/img/4.png"></S.Short>
      <S.Long src="/img/5.png"></S.Long>
      <S.Base src="/img/6.png"></S.Base>
    </S.Wrap>

    </S.Container>
  </>
  );
};

export default Feed;

