import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import TopNav from 'components/TopNav';
import Section from 'components/pages/write/Section';
import { fetchDetailLog } from 'apis/points';

const Log = () => {
  const [detail, setDetail] = useState();
  const { id } = useParams();

  const loadDetailLog = async () => {
    const res = await fetchDetailLog(id);

    setDetail(res);
  };

  useEffect(() => {
    loadDetailLog();
  }, [id]);

  if (!detail) {
    return <div />;
  }

  return (
    <div
      style={{
        padding: '0px 24px 0 24px',
      }}
    >
      <TopNav title="로그기록 보러가기" />
      <div
        style={{
          marginBottom: 33,
          marginTop: 104,
          display: 'flex',
        }}
      >
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOhfc2%2FbtqyM3Drmzw%2FRmmmbGdhfFxg2OJ6EADk9K%2Fimg.png"
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            marginRight: 12,
          }}
        />
        <div>{detail.userName}</div>
      </div>
      <Section title="날짜">
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            border: 'none',
            color: '#7F7F7F',
            fontSize: 18,
            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
            borderRadius: 8,
            padding: 12,
          }}
        >
          {detail.date.slice(0, 10)}
        </div>
      </Section>
      <Section title="입수형태">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          className=" space-x-3"
        >
          {[
            { title: '해안', value: 'BEATCH' },
            { title: '보트', value: 'BOAT' },
            { title: '기타', value: 'ETC' },
          ].map((item) => (
            <div
              style={{
                padding: '12px 0',
                backgroundColor: item.value === detail.diveEntry ? '#8FB4FE' : 'white',
                width: '106px',
                textAlign: 'center',
                color: item.value === detail.diveEntry ? 'white' : '#7F7F7F',
                borderRadius: 8,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </Section>
      <Section title="수면해류">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          className=" space-x-3"
        >
          {[
            { title: '강한해류', value: 'STRONG' },
            { title: '보통해류', value: 'MIDDLE' },
            { title: '약한해류', value: 'WEEK' },
          ].map((item) => (
            <div
              style={{
                padding: '12px 0',
                backgroundColor: item.value === detail.surfaceFlow ? '#8FB4FE' : 'white',
                width: '106px',
                textAlign: 'center',
                color: item.value === detail.surfaceFlow ? 'white' : '#7F7F7F',
                borderRadius: 8,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </Section>
      <Section title="심층해류">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          className=" space-x-3"
        >
          {[
            { title: '강한해류', value: 'STRONG' },
            { title: '보통해류', value: 'MIDDLE' },
            { title: '약한해류', value: 'WEEK' },
          ].map((item) => (
            <div
              style={{
                padding: '12px 0',
                backgroundColor: item.value === detail.deepFlow ? '#8FB4FE' : 'white',
                width: '106px',
                textAlign: 'center',
                color: item.value === detail.deepFlow ? 'white' : '#7F7F7F',
                borderRadius: 8,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </Section>
      {detail.waterTemp && (
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <div style={{ marginRight: 17, width: '100%' }}>
            <Section title="수온">
              <div
                style={{
                  backgroundColor: '#F8F8F8',
                  padding: '15px 0',
                  maxWidth: '164px',
                  width: '100%',
                  textAlign: 'center',
                  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                  fontSize: 18,
                  fontWeight: 500,
                  borderRadius: 8,
                }}
              >
                {detail.waterTemp}℃
              </div>
            </Section>
          </div>
          <Section title="기온">
            <div
              style={{
                backgroundColor: '#F8F8F8',
                padding: '15px 0',
                maxWidth: '164px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                fontSize: 18,
                fontWeight: 500,
                borderRadius: 8,
              }}
            >
              {detail.temp}℃
            </div>
          </Section>
        </div>
      )}
      {detail.beforeIntake && (
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <div style={{ marginRight: 17, width: '100%' }}>
            <Section title="입수전 잔량">
              <div
                style={{
                  backgroundColor: '#F8F8F8',
                  padding: '15px 0',
                  maxWidth: '164px',
                  width: '100%',
                  textAlign: 'center',
                  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                  fontSize: 18,
                  fontWeight: 500,
                  borderRadius: 8,
                }}
              >
                {detail.beforeIntake + 'bar'}
              </div>
            </Section>
          </div>
          <Section title="입수후 잔량">
            <div
              style={{
                backgroundColor: '#F8F8F8',
                padding: '15px 0',
                maxWidth: '164px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                fontSize: 18,
                fontWeight: 500,
                borderRadius: 8,
              }}
            >
              {detail.afterIntake + 'bar'}
            </div>
          </Section>
        </div>
      )}
      {detail.maxDepth && (
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <div style={{ marginRight: 17, width: '100%' }}>
            <Section title="다이브 최고수심">
              <div
                style={{
                  backgroundColor: '#F8F8F8',
                  padding: '15px 0',
                  maxWidth: '164px',
                  width: '100%',
                  textAlign: 'center',
                  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                  fontSize: 18,
                  fontWeight: 500,
                  borderRadius: 8,
                }}
              >
                {detail.maxDepth + 'm'}
              </div>
            </Section>
          </div>
          <Section title="포인트 수심">
            <div
              style={{
                backgroundColor: '#F8F8F8',
                padding: '15px 0',
                maxWidth: '164px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                fontSize: 18,
                fontWeight: 500,
                borderRadius: 8,
              }}
            >
              {detail.pointDepth + 'm'}
            </div>
          </Section>
        </div>
      )}
      {detail.diveTime && (
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <div style={{ marginRight: 17, width: '100%' }}>
            <Section title="다이빙 시간">
              <div
                style={{
                  backgroundColor: '#F8F8F8',
                  padding: '15px 0',
                  maxWidth: '164px',
                  width: '100%',
                  textAlign: 'center',
                  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                  fontSize: 18,
                  fontWeight: 500,
                  borderRadius: 8,
                }}
              >
                {detail.diveTime + 'm'}
              </div>
            </Section>
          </div>
          <Section title="감압 시간">
            <div
              style={{
                backgroundColor: '#F8F8F8',
                padding: '15px 0',
                maxWidth: '164px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                fontSize: 18,
                fontWeight: 500,
                borderRadius: 8,
              }}
            >
              {detail.decompression + 'm'}
            </div>
          </Section>
        </div>
      )}
      {detail.eyesight && (
        <Section title="시야">
          <div
            style={{
              backgroundColor: '#F8F8F8',
              padding: '15px 0',

              width: '100%',
              textAlign: 'center',
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              fontSize: 18,
              fontWeight: 500,
              borderRadius: 8,
            }}
          >
            {detail.eyesight + 'm'}
          </div>
        </Section>
      )}
    </div>
  );
};

export default Log;
