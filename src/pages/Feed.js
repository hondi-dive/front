const Feed = () => {
  return (
    <div>
      <div>에서 이렇게 놀고있어요</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          rowGap: 10,
          columnGap: 10,
        }}
      >
        <div
          style={{
            backgroundColor: 'blue',
            width: 20,
            height: 20,
          }}
        />
        <div
          style={{
            backgroundColor: 'green',
            width: 50,
            height: 50,
          }}
        />
        <div
          style={{
            backgroundColor: 'blue',
            width: 20,
            height: 20,
          }}
        />
        <div
          style={{
            backgroundColor: 'green',
            width: 20,
            height: 20,
          }}
        />
        <div
          style={{
            backgroundColor: 'blue',
            width: 20,
            height: 20,
          }}
        />
        <div
          style={{
            backgroundColor: 'green',
            width: 50,
            height: 50,
          }}
        />
        <div
          style={{
            backgroundColor: 'blue',
            width: 20,
            height: 20,
          }}
        />
      </div>
    </div>
  );
};

export default Feed;
