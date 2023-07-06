export const shareKakao = (img) => {
  console.log(img);
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init('40037cf54b8a13e65ccb4b9cdecd677f');
    }

    kakao.Link.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: 'dd', // 인자값으로 받은 title
        description: '설명',
        imageUrl: img,
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      buttons: [
        {
          title: 'title',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  }
};
