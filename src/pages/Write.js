import { useState, useRef } from 'react';

import TopNav from 'components/TopNav';
import { createPoint } from 'apis/points';
import Section from 'components/pages/write/Section';

const Write = () => {
  const inputRef = useRef(null);

  const [imgFile, setImgFile] = useState();
  const [category, setCategory] = useState('scuba');
  const [pointId, setPointId] = useState();
  const [date, setDate] = useState();
  const [star, setStar] = useState([true, true, true, true, false, false]);
  const [text, setText] = useState();
  const [eyesight, setEyesight] = useState();
  const [water, setWater] = useState();
  const [oceanCurrent, setOceanCurrent] = useState();
  const [waterSurface, setWaterSurface] = useState();
  const [weather, setWeather] = useState();
  const [waterTemperature, setWaterTemperature] = useState();
  const [temperature, setTemperature] = useState();
  const [diveTime, setDiveTime] = useState();
  const [beforeIntake, setBeforeIntake] = useState();
  const [afterIntake, setAfterIntake] = useState();
  const [highestDepth, setHighestDepth] = useState();
  const [pointDepth, setPointDepth] = useState();
  const [decompression, setDecompression] = useState(false);

  const onUploadImage = async (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const onFinish = async () => {
    const formData = new FormData();

    formData.append('imgFile', new Blob([imgFile], { type: 'image/png' }));

    const value = {
      category,
      pointId: Number(pointId),
      date: new Date(date),
      star: Number(star.filter((el) => el).length - 1),
      text,
      eyesight: Number(eyesight),
      water,
      oceanCurrent,
      waterSurface,
      waterTemperature: Number(waterTemperature),
      temperature: Number(temperature),
      diveTime: Number(diveTime),
      beforeIntake: Number(beforeIntake),
      afterIntake: Number(afterIntake),
      highestDepth: Number(highestDepth),
      pointDepth: Number(pointDepth),
      decompression,
    };

    formData.append('contents', new Blob([JSON.stringify(value)], { type: 'application/json' }));

    const res = await createPoint(formData);
  };

  const handleOptionChange = (event) => {
    setWater(event.target.value);
  };

  const handleOptionChange2 = (event) => {
    setOceanCurrent(event.target.value);
  };

  const handleOptionChange3 = (event) => {
    setWaterSurface(event.target.value);
  };

  const handleStarClick = (index) => {
    let clickStates = [...star];
    for (let i = 0; i <= 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setStar(clickStates);
  };

  const onUploadImageButtonClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };
  return (
    <div
      style={{
        padding: '0px 24px 0 24px',
      }}
    >
      <TopNav
        title="나의 로그 작성하기"
        actionName="저장"
        action={() => {
          onFinish();
        }}
      />
      <div
        style={{
          color: 'black',
          fontSize: 24,
          fontWeight: 600,
          marginBottom: 40,
          marginTop: 104,
        }}
      >
        나의 물질을 자랑해줍서
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 40,
        }}
      >
        <button
          style={{
            width: 160,
            height: 56,
            padding: 16,
            fontSize: 18,
            borderRadius: 8,
            color: 'white',
            backgroundColor: '#327AEB',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="/img/location.svg"
            width={24}
            height={24}
            style={{
              marginRight: 10,
            }}
          />
          <span>장소 등록</span>
        </button>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          style={{
            width: 160,
            border: 'none',
            color: '#7F7F7F',
            fontSize: 18,
            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
            borderRadius: 8,
            padding: 8,
          }}
          value={category}
        >
          <option value="scuba">스쿠버</option>
        </select>
      </div>
      <div
        style={{
          width: '100%',
          padding: 17,
          backgroundColor: '#F3F4F9',
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
          textAlign: 'center',
          marginBottom: 28,
        }}
      >
        <div
          style={{
            color: '#7F7F7F',
            marginBottom: 15,
          }}
        >
          활동은 어떠셨나요?
        </div>
        {[1, 2, 3, 4, 5].map((el) => (
          <img
            key={el}
            onClick={() => handleStarClick(el)}
            src={star[el] ? '/img/active-star.svg' : '/img/star.svg'}
            style={{
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
      <div
        style={{
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
          color: '#7F7F7F',
          width: '100%',
          height: 352,
          paddingTop: 28,
          textAlign: 'center',
          fontSize: 18,
          lineHeight: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            marginBottom: 24,
          }}
        >
          함께 공유하고 싶은 바다를 <br />
          자랑해줍서!
        </div>
        <div
          style={{
            backgroundColor: '#327AEB',
            borderRadius: '50%',
            width: 72,
            height: 72,
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={onUploadImageButtonClick}
        >
          <img src="/img/plus.svg" width={28} height={28} />
        </div>
      </div>
      <input
        type="file"
        ref={inputRef}
        id="fileUpload"
        onChange={onUploadImage}
        style={{
          display: 'none',
        }}
      />
      <div
        style={{
          color: '#7F7F7F',
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '32px',
        }}
      >
        포인트
      </div>
      <input
        name="pointId"
        placeholder="포인트"
        style={{
          width: '100%',
          border: 'none',
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
          padding: 8,
        }}
        onChange={(e) => {
          setPointId(e.target.value);
        }}
        value={pointId}
      />
      <Section title="날짜">
        <input
          type="date"
          name="date"
          style={{
            width: '100%',
            border: 'none',
            height: 56,
            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
            borderRadius: 8,
            padding: '0 8px',
          }}
          placeholder="날짜"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
      </Section>
      <Section title="테스트">
        <textarea
          className="scrollbar-hide h-8 w-full resize-none pt-2 pl-4 text-sm font-thin"
          style={{
            lineHeight: 1.5,
            width: '100%',
            padding: 12,
            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
            borderRadius: 8,
            resize: 'none',
          }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              handleConfirm(e);
            }
          }}
          placeholder="후기를 작성해줍서!"
        />
      </Section>

      <Section title="입수형태">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <input
            type="radio"
            id="coast"
            value="coast"
            checked={water === 'coast'}
            onClick={handleOptionChange}
          />
          <label for="coast" style={{ padding: '8px 38px' }}>
            해안
          </label>
          <input
            type="radio"
            id="boat"
            value="boat"
            checked={water === 'boat'}
            onClick={handleOptionChange}
          />
          <label for="boat" style={{ padding: '8px 38px' }}>
            보트
          </label>
          <input
            type="radio"
            value="etc"
            id="etc"
            checked={water === 'etc'}
            onClick={handleOptionChange}
          />
          <label for="etc" style={{ padding: '8px 38px' }}>
            기타
          </label>
        </div>
      </Section>
      <Section title="수면해류">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <input
            type="radio"
            id="strongCurrent"
            value="strongCurrent"
            checked={oceanCurrent === 'strongCurrent'}
            onClick={handleOptionChange2}
          />
          <label for="strongCurrent" style={{ padding: '8px 24px' }}>
            강한해류
          </label>
          <input
            type="radio"
            id="weakCurrent"
            value="weakCurrent"
            checked={oceanCurrent === 'weakCurrent'}
            onClick={handleOptionChange2}
          />
          <label for="weakCurrent" style={{ padding: '8px 24px' }}>
            약한해류
          </label>
          <input
            type="radio"
            value="noAlgae"
            id="noAlgae"
            checked={oceanCurrent === 'noAlgae'}
            onClick={handleOptionChange2}
          />
          <label for="noAlgae" style={{ padding: '8px 24px' }}>
            해류없음
          </label>
        </div>
      </Section>
      <Section title="심층해류">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <input
            type="radio"
            id="strong"
            value="strong"
            checked={waterSurface === 'strong'}
            onClick={handleOptionChange3}
          />
          <label for="strong" style={{ padding: '8px 24px' }}>
            강한해류
          </label>
          <input
            type="radio"
            id="weak"
            value="weak"
            checked={waterSurface === 'weak'}
            onClick={handleOptionChange3}
          />
          <label for="weak" style={{ padding: '8px 24px' }}>
            약한해류
          </label>
          <input
            type="radio"
            value="tranquility"
            id="tranquility"
            checked={waterSurface === 'tranquility'}
            onClick={handleOptionChange3}
          />
          <label for="tranquility" style={{ padding: '8px 24px' }}>
            해류없음
          </label>
        </div>
      </Section>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Section title="수온">
          <div
            style={{
              width: '164px',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
              position: 'relative',
              padding: 12,
            }}
          >
            <input
              name="waterTemperature"
              style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
              placeholder="수온"
              onChange={(e) => {
                setWaterTemperature(e.target.value);
              }}
              type="number"
              value={waterTemperature}
            />
            <div
              style={{
                position: 'absolute',
                right: 10,
                top: 21,
              }}
            >
              ℃
            </div>
          </div>
        </Section>
        <Section title="기온">
          <div
            style={{
              width: '164px',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
              position: 'relative',
              padding: 12,
            }}
          >
            <input
              name="temperature"
              style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
              placeholder="기온"
              type="number"
              onChange={(e) => {
                setTemperature(e.target.value);
              }}
              value={temperature}
            />
            <div
              style={{
                position: 'absolute',
                right: 10,
                top: 21,
              }}
            >
              ℃
            </div>
          </div>
        </Section>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Section title="입수전 잔량">
          <div
            style={{
              width: '164px',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
              position: 'relative',
              padding: 12,
            }}
          >
            <input
              name="beforeIntake"
              placeholder="입수전 잔량"
              type="number"
              style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
              onChange={(e) => {
                setBeforeIntake(e.target.value);
              }}
              value={beforeIntake}
            />
            <div
              style={{
                position: 'absolute',
                right: 10,
                top: 21,
              }}
            >
              bar
            </div>
          </div>
        </Section>
        <Section title="입수후 잔량">
          <div
            style={{
              width: '164px',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
              position: 'relative',
              padding: 12,
            }}
          >
            <input
              name="afterIntake"
              style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
              placeholder="입수후 잔량"
              type="number"
              onChange={(e) => {
                setAfterIntake(e.target.value);
              }}
              value={afterIntake}
            />
            <div
              style={{
                position: 'absolute',
                right: 10,
                top: 21,
              }}
            >
              bar
            </div>
          </div>
        </Section>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Section title="다이브 최고수심">
          <div
            style={{
              width: '164px',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
              position: 'relative',
              padding: 12,
            }}
          >
            <input
              name="highestDepth"
              style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
              placeholder="다이브 최고수심"
              type="number"
              onChange={(e) => {
                setHighestDepth(e.target.value);
              }}
              value={highestDepth}
            />
            <div
              style={{
                position: 'absolute',
                right: 10,
                top: 21,
              }}
            >
              M
            </div>
          </div>
        </Section>
        <Section title="포인트 수심">
          <div
            style={{
              width: '164px',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
              position: 'relative',
              padding: 12,
            }}
          >
            <input
              name="pointDepth"
              style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
              type="number"
              placeholder="포인트 수심"
              onChange={(e) => {
                setPointDepth(e.target.value);
              }}
              value={pointDepth}
            />
            <div
              style={{
                position: 'absolute',
                right: 10,
                top: 21,
              }}
            >
              M
            </div>
          </div>
        </Section>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Section title="다이빙 시간">
          <input
            name="diveTime"
            placeholder="다이빙 시간"
            style={{
              width: '100%',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
              padding: 8,
            }}
            onChange={(e) => {
              setDiveTime(e.target.value);
            }}
            value={diveTime}
          />
        </Section>
        <Section title="감압 여부">
          <div
            style={{
              width: '164px',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
            }}
            placeholder="감압 다이빙"
            onClick={(e) => {
              setDecompression(!decompression);
            }}
            value={decompression}
          >
            {decompression ? '했음' : '안함'}
          </div>
        </Section>
      </div>
      <Section title="시야">
        <div
          style={{
            width: '100%',
            border: 'none',
            height: 56,
            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
            borderRadius: 8,
            position: 'relative',
            padding: 12,
          }}
        >
          <input
            name="eyesight"
            placeholder="시야"
            type="number"
            style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
            onChange={(e) => {
              setEyesight(e.target.value);
            }}
            value={eyesight}
          />
          <div
            style={{
              position: 'absolute',
              right: 10,
              top: 21,
            }}
          >
            M
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Write;
