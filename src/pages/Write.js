import { useState, useRef } from 'react';

import TopNav from 'components/TopNav';
import { createPoint } from 'apis/points';

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
      // style={{
      //   padding: '0px 24px 0 24px',
      // }}
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
          marginTop: 40,
          paddingTop: 40,
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
      <input
        type="date"
        name="date"
        style={{ width: '100%' }}
        placeholder="날짜"
        onChange={(e) => {
          setDate(e.target.value);
        }}
        value={date}
      />
      <input
        name="text"
        style={{
          width: '100%',
          border: 'none',
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
          padding: 8,
        }}
        placeholder="텍스트 로그"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <input
        name="eyesight"
        placeholder="시야"
        type="number"
        style={{
          width: '100%',
          border: 'none',
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
          padding: 8,
        }}
        onChange={(e) => {
          setEyesight(e.target.value);
        }}
        value={eyesight}
      />
      <div
        style={{
          color: '#7F7F7F',
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '32px',
        }}
      >
        입수형태
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="coast"
            checked={water === 'coast'}
            onChange={handleOptionChange}
          />
          비치
        </label>
        <label>
          <input
            type="radio"
            value="boat"
            checked={water === 'boat'}
            onChange={handleOptionChange}
          />
          보트
        </label>
        <label>
          <input type="radio" value="etc" checked={water === 'etc'} onChange={handleOptionChange} />
          기타
        </label>
      </div>
      <div
        style={{
          color: '#7F7F7F',
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '32px',
        }}
      >
        해류 (수면)
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="strongCurrent"
            checked={oceanCurrent === 'strongCurrent'}
            onChange={handleOptionChange2}
          />
          강한해류
        </label>
        <label>
          <input
            type="radio"
            value="weakCurrent"
            checked={oceanCurrent === 'weakCurrent'}
            onChange={handleOptionChange2}
          />
          약한해류
        </label>
        <label>
          <input
            type="radio"
            value="noAlgae"
            checked={oceanCurrent === 'noAlgae'}
            onChange={handleOptionChange2}
          />
          해류없음
        </label>
      </div>
      <div
        style={{
          color: '#7F7F7F',
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '32px',
        }}
      >
        해류 (심층)
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="strong"
            checked={waterSurface === 'strong'}
            onChange={handleOptionChange3}
          />
          강한해류
        </label>
        <label>
          <input
            type="radio"
            value="weak"
            checked={waterSurface === 'weak'}
            onChange={handleOptionChange3}
          />
          약한해류
        </label>
        <label>
          <input
            type="radio"
            value="tranquility"
            checked={waterSurface === 'tranquility'}
            onChange={handleOptionChange3}
          />
          해류없음
        </label>
      </div>
      <div
        style={{
          color: '#7F7F7F',
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '32px',
        }}
      >
        수온
      </div>
      <input
        name="waterTemperature"
        style={{
          width: '100%',
          border: 'none',
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
          padding: 8,
        }}
        placeholder="수온"
        onChange={(e) => {
          setWaterTemperature(e.target.value);
        }}
        type="number"
        value={waterTemperature}
      />
      <div
        style={{
          color: '#7F7F7F',
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '32px',
        }}
      >
        날씨
      </div>
      <input
        name="category"
        placeholder="날씨"
        style={{
          width: '100%',
          border: 'none',
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
          padding: 8,
        }}
        onChange={(e) => {
          setWeather(e.target.value);
        }}
        value={weather}
      />
      <div
        style={{
          color: '#7F7F7F',
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '32px',
        }}
      >
        기온
      </div>
      <input
        name="temperature"
        style={{
          width: '100%',
          border: 'none',
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
          padding: 8,
        }}
        placeholder="기온"
        type="number"
        onChange={(e) => {
          setTemperature(e.target.value);
        }}
        value={temperature}
      />
      <div
        style={{
          color: '#7F7F7F',
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '32px',
        }}
      >
        다이빙 시간
      </div>
      <input
        name="diveTime"
        placeholder="다이빙 시간"
        style={{
          width: '100%',
          border: 'none',
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
          padding: 8,
        }}
        onChange={(e) => {
          setDiveTime(e.target.value);
        }}
        value={diveTime}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              color: '#7F7F7F',
              fontSize: 18,
              fontWeight: 500,
              lineHeight: '32px',
            }}
          >
            입수전 잔량
          </div>
          <input
            name="beforeIntake"
            placeholder="입수전 잔량"
            type="number"
            style={{
              width: '164px',
              height: 56,
              border: 'none',
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
            }}
            onChange={(e) => {
              setBeforeIntake(e.target.value);
            }}
            value={beforeIntake}
          />
        </div>
        <div>
          <div
            style={{
              color: '#7F7F7F',
              fontSize: 18,
              fontWeight: 500,
              lineHeight: '32px',
            }}
          >
            입수후 잔량
          </div>
          <input
            name="afterIntake"
            style={{
              width: '164px',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
            }}
            placeholder="입수후 잔량"
            type="number"
            onChange={(e) => {
              setAfterIntake(e.target.value);
            }}
            value={afterIntake}
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              color: '#7F7F7F',
              fontSize: 18,
              fontWeight: 500,
              lineHeight: '32px',
            }}
          >
            다이브 최고수심
          </div>
          <input
            name="highestDepth"
            placeholder="다이브 최고수심"
            type="number"
            style={{
              width: '164px',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
            }}
            onChange={(e) => {
              setHighestDepth(e.target.value);
            }}
            value={highestDepth}
          />
        </div>
        <div>
          <div
            style={{
              color: '#7F7F7F',
              fontSize: 18,
              fontWeight: 500,
              lineHeight: '32px',
            }}
          >
            포인트 수심
          </div>
          <input
            name="pointDepth"
            style={{
              width: '164px',
              border: 'none',
              height: 56,
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: 8,
            }}
            type="number"
            placeholder="포인트 수심"
            onChange={(e) => {
              setPointDepth(e.target.value);
            }}
            value={pointDepth}
          />
        </div>
      </div>
      <div
        style={{
          color: '#7F7F7F',
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '32px',
        }}
      >
        감압 다이빙
      </div>
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
    </div>
  );
};

export default Write;
