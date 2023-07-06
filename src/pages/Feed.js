import * as S from 'components/pages/feed/Feed.style';

const Feed = () => {
  const images = [
    {
      id: 1,
      img: 'https://media.istockphoto.com/id/1364065231/ko/%EC%82%AC%EC%A7%84/%EA%B0%80%EB%8A%A5-%ED%95%98%EC%A7%80-%EA%B0%80%EB%8A%A5%ED%95%9C-%EA%B0%9C%EB%85%90%EC%9D%B4-%EC%9D%B4%EB%8B%A4.jpg?s=1024x1024&w=is&k=20&c=byN33Pr08qOzgJh9lsEoth5VjGaVDTmR1qtuM4zVPqY=',
    },
    {
      id: 2,
      img: 'https://media.istockphoto.com/id/1400865154/ko/%EC%82%AC%EC%A7%84/%EB%B3%B4%ED%97%98-%EB%B0%8F-%EC%9C%84%ED%97%98-%EA%B4%80%EB%A6%AC-%EA%B0%9C%EB%85%90.jpg?s=1024x1024&w=is&k=20&c=t8n8yIqkupfP5X5_Za6r9rUV7iH0ohBBBTlPkZgfEq0=',
    },
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2017/10/24/21/49/playing-cards-2886284_1280.png',
    },
    {
      id: 4,
      img: 'https://cdn.pixabay.com/photo/2017/01/22/21/33/gambling-2001035_1280.jpg',
    },
    {
      id: 5,
      img: 'https://cdn.pixabay.com/photo/2019/05/04/16/54/gambling-4178457_1280.jpg',
    },
  ];

  return (
    <S.Container>
      <S.Title>에서 이렇게 놀고있어요</S.Title>
      <S.Gallery>
        {images.map((image) => (
          <S.Image key={image.id} src={image.img} />
        ))}
      </S.Gallery>
    </S.Container>
  );
};

export default Feed;
