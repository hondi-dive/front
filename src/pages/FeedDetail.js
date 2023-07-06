const FeedDetail = () => {
  return (
    <div>
      <img
        src={
          'data:image/jpeg;base64,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'
        }
        style={{
          width: '100%',
          height: 500,
        }}
        alt="메인 이미지"
      />
      <div>
        오늘 제주도왔다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁ
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div>장소 :</div>
        <div>바다</div>
      </div>
    </div>
  );
};

export default FeedDetail;