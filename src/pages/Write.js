import { useState } from 'react';
import { createPoint } from 'apis/points';

const Write = () => {
  const [imgFile, setImgFile] = useState();
  const [category, setCategory] = useState('scuba');
  const [pointId, setPointId] = useState();
  const [date, setDate] = useState();
  const [star, setStar] = useState();
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
      star: Number(star),
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

  return (
    <div>
      바다 자랑하게!
      <input type="file" id="fileUpload" onChange={onUploadImage} />
      <input
        name="category"
        placeholder="다이빙 유형"
        style={{ width: '100%' }}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      <input
        name="pointId"
        placeholder="포인트"
        style={{ width: '100%' }}
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
        name="star"
        type="number"
        style={{ width: '100%' }}
        placeholder="만족도"
        onChange={(e) => {
          setStar(e.target.value);
        }}
        value={star}
      />
      <input
        name="text"
        style={{ width: '100%' }}
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
        style={{ width: '100%' }}
        onChange={(e) => {
          setEyesight(e.target.value);
        }}
        value={eyesight}
      />
      <select
        onChange={(e) => {
          setWater(e.target.value);
        }}
        value={water}
      >
        <option value="coast">비치/해안</option>
        <option value="boat">보트</option>
        <option value="etc">기타</option>
      </select>
      <select
        onChange={(e) => {
          setOceanCurrent(e.target.value);
        }}
        value={oceanCurrent}
      >
        <option value="crazyCurrent">미친해류</option>
        <option value="strongCurrent">강한해류</option>
        <option value="weakCurrent">약한해류</option>
        <option value="noAlgae">조류없음</option>
      </select>
      <select
        onChange={(e) => {
          setWaterSurface(e.target.value);
        }}
        value={waterSurface}
      >
        <option value="weak">약한</option>
        <option value="tranquility">중간</option>
        <option value="strong">강한</option>
      </select>
      <input
        name="category"
        placeholder="날씨"
        style={{ width: '100%' }}
        onChange={(e) => {
          setWeather(e.target.value);
        }}
        value={weather}
      />
      <input
        name="waterTemperature"
        style={{ width: '100%' }}
        placeholder="수온"
        onChange={(e) => {
          setWaterTemperature(e.target.value);
        }}
        type="number"
        value={waterTemperature}
      />
      <input
        name="temperature"
        style={{ width: '100%' }}
        placeholder="기온"
        type="number"
        onChange={(e) => {
          setTemperature(e.target.value);
        }}
        value={temperature}
      />
      <input
        name="diveTime"
        placeholder="다이빙 시간"
        style={{ width: '100%' }}
        onChange={(e) => {
          setDiveTime(e.target.value);
        }}
        value={diveTime}
      />
      <input
        name="beforeIntake"
        placeholder="입수전 잔량"
        type="number"
        style={{ width: '100%' }}
        onChange={(e) => {
          setBeforeIntake(e.target.value);
        }}
        value={beforeIntake}
      />
      <input
        name="afterIntake"
        style={{ width: '100%' }}
        placeholder="입수후 잔량"
        type="number"
        onChange={(e) => {
          setAfterIntake(e.target.value);
        }}
        value={afterIntake}
      />
      <input
        name="highestDepth"
        placeholder="다이브 최고수심"
        type="number"
        style={{ width: '100%' }}
        onChange={(e) => {
          setHighestDepth(e.target.value);
        }}
        value={highestDepth}
      />
      <input
        name="pointDepth"
        style={{ width: '100%' }}
        type="number"
        placeholder="포인트 수심"
        onChange={(e) => {
          setPointDepth(e.target.value);
        }}
        value={pointDepth}
      />
      <div
        style={{ width: '100%', height: 50 }}
        placeholder="감압 다이빙"
        onClick={(e) => {
          setDecompression(!decompression);
        }}
        value={decompression}
      >
        {decompression ? 'd' : '22'}
      </div>
      <div
        onClick={() => {
          onFinish();
        }}
      >
        전송
      </div>
    </div>
  );
};

export default Write;
