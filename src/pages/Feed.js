import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';
import { RxDividerVertical } from 'react-icons/rx';

import { fetchFeed } from 'apis/points';
import * as S from 'components/pages/feed/Feed.style';
import TopNav from 'components/TopNav';

const staticServerUri = process.env.REACT_APP_PATH || '';

const Feed = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pointId = searchParams.get('point');
  const [feedData, setFeedDate] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    if (filter) {
      loadFeed(filter);
    }
  }, [filter]);

  const loadFeed = async (filter) => {
    if (filter) {
      const res = await fetchFeed(Number(pointId), filter);

      setFeedDate(res);
    } else {
      const res = await fetchFeed(Number(pointId));

      setFeedDate(res);
    }
  };

  useEffect(() => {
    loadFeed();
  }, [pointId]);

  if (!feedData) {
    return <div />;
  }

  const dsa = (data) => {
    if (data === 'SNORKEL') {
      return '/img/bottle.svg';
    }
    if (data === 'FREEDIVING') {
      return '/img/bottle2.svg';
    }
    if (data === 'SCUBA') {
      return '/img/bottle3.svg';
    }
  };

  return (
    <>
      <TopNav title={feedData.pointName} actionName="" />

      <S.Container>
        <S.Tag>
          <S.Icon>
            <HiLocationMarker className="icon" size="25" color="white" />
          </S.Icon>
          <S.Location>{feedData.pointName}</S.Location>
        </S.Tag>
        <S.Title>에서는 이렇게 놀고있어요!</S.Title>
        <div className="px-6">
          <S.OptionContainer>
            <S.Option
              onClick={() => {
                setFilter('SNORKEL');
              }}
            >
              스노클
            </S.Option>
            <RxDividerVertical className="icon" size="30" color="black" />
            <S.Option
              onClick={() => {
                setFilter('FREEDIVING');
              }}
            >
              프리다이빙
            </S.Option>

            <RxDividerVertical className="icon" size="30" color="black" />
            <S.Option
              onClick={() => {
                setFilter('SCUBA');
              }}
            >
              스쿠버
            </S.Option>
          </S.OptionContainer>
        </div>
        <S.GalleryContainer>
          <S.Gallery>
            {feedData.divePostList.map((image) => (
              <div style={{ position: 'relative' }}>
                <S.Image
                  key={image.id}
                  src={image.imgUrl}
                  onClick={() => {
                    navigate(staticServerUri + `/feed/${image.id}`);
                  }}
                />
                <img className="absolute right-3 top-3 w-11 h-11" src={dsa(image.category)} />
              </div>
            ))}
          </S.Gallery>
        </S.GalleryContainer>
      </S.Container>
    </>
  );
};

export default Feed;
