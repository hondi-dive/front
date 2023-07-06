import TopNav from 'components/TopNav';
import Section from 'components/pages/write/Section';

const Log = () => {
  const data = {
    afterIntake: 2,
    beforeIntake: 2,
    category: 'SCUBA',
    date: 1,
    decompression: 2,
    deepFlow: 'MIDDLE',
    diveEntry: 'BOAT',
    diveTime: 2,
    eyesight: 2,
    maxDepth: 2,
    pointDepth: 2,
    pointId: 1,
    star: 5,
    surfaceFlow: 'MIDDLE',
    temp: 10,
    text: 'a',
    waterTemp: 4,
  };

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
        <div>ddsadsadsa</div>
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
          2023년
        </div>
      </Section>
      <Section title="입수형태">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {[
            { title: '해안', value: 'BEATCH' },
            { title: '보트', value: 'BOAT' },
            { title: '기타', value: 'ETC' },
          ].map((item) => (
            <div
              style={{
                padding: '12px 0',
                backgroundColor: item.value === data.diveEntry ? '#8FB4FE' : 'white',
                width: '106px',
                textAlign: 'center',
                color: item.value === data.diveEntry ? 'white' : '#7F7F7F',
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
        >
          {[
            { title: '강한해류', value: 'STRONG' },
            { title: '보통해류', value: 'MIDDLE' },
            { title: '약한해류', value: 'WEEK' },
          ].map((item) => (
            <div
              style={{
                padding: '12px 0',
                backgroundColor: item.value === data.surfaceFlow ? '#8FB4FE' : 'white',
                width: '106px',
                textAlign: 'center',
                color: item.value === data.surfaceFlow ? 'white' : '#7F7F7F',
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
        >
          {[
            { title: '강한해류', value: 'STRONG' },
            { title: '보통해류', value: 'MIDDLE' },
            { title: '약한해류', value: 'WEEK' },
          ].map((item) => (
            <div
              style={{
                padding: '12px 0',
                backgroundColor: item.value === data.deepFlow ? '#8FB4FE' : 'white',
                width: '106px',
                textAlign: 'center',
                color: item.value === data.deepFlow ? 'white' : '#7F7F7F',
                borderRadius: 8,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </Section>
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
              {data.waterTemp}℃
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
            {data.temp}℃
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Log;
