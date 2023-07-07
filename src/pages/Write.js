import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { createPoint } from 'apis/points';
import TopNav from 'components/TopNav';
import Section from 'components/pages/write/Section';
import KakaoMap from 'components/pages/map/KakaoMap';

const staticServerUri = process.env.REACT_APP_PATH || '';

const Write = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);

  const [isMap, setIsMap] = useState(false);
  const [imgFile, setImgFile] = useState();
  const [category, setCategory] = useState('SNORKEL');
  const [pointId, setPointId] = useState();
  const [date, setDate] = useState();
  const [star, setStar] = useState([true, true, true, true, false, false]);
  const [text, setText] = useState();
  const [eyesight, setEyesight] = useState();
  const [diveEntry, setDiveEntry] = useState();
  const [surfaceFlow, setSurfaceFlow] = useState();
  const [deepFlow, setDeepFlow] = useState();
  const [waterTemp, setWaterTemp] = useState();
  const [temp, setTemp] = useState();
  const [diveTime, setDiveTime] = useState();
  const [beforeIntake, setBeforeIntake] = useState();
  const [afterIntake, setAfterIntake] = useState();
  const [maxDepth, setMaxDepth] = useState();
  const [pointDepth, setPointDepth] = useState();
  const [decompression, setDecompression] = useState();
  const [preImg, setPreImg] = useState();

  useEffect(() => {
    setEyesight();
    setDiveEntry();
    setSurfaceFlow();
    setDeepFlow();
    setWaterTemp();
    setTemp();
    setDiveTime();
    setBeforeIntake();
    setAfterIntake();
    setMaxDepth();
    setPointDepth();
    setDecompression();
  }, [category]);

  const onUploadImage = async (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setImgFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreImg(reader.result);
    };
  };

  const onFinish = async () => {
    const formData = new FormData();

    formData.append('imgFile', imgFile);

    const value = {
      category,
      pointId: Number(pointId.id),
      date: new Date(date),
      star: Number(star.filter((el) => el).length - 1),
      text,
      eyesight: Number(eyesight),
      diveEntry,
      surfaceFlow,
      deepFlow,
      waterTemp: Number(waterTemp),
      temp: Number(temp),
      diveTime: Number(diveTime),
      beforeIntake: Number(beforeIntake),
      afterIntake: Number(afterIntake),
      maxDepth: Number(maxDepth),
      pointDepth: Number(pointDepth),
      decompression,
      userName: cookies.accessToken,
    };

    formData.append('contents', new Blob([JSON.stringify(value)], { type: 'application/json' }));

    const res = await createPoint(formData);
  };

  const handleOptionChange = (event) => {
    setDiveEntry(event.target.value);
  };

  const handleOptionChange2 = (event) => {
    setSurfaceFlow(event.target.value);
  };

  const handleOptionChange3 = (event) => {
    setDeepFlow(event.target.value);
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
        padding: isMap ? '0' : '0px 24px 12px 24px',
      }}
    >
      {isMap && (
        <KakaoMap
          action={(id) => {
            setIsMap(false);
            setPointId(id);
          }}
        />
      )}
      <TopNav
        title="나의 로그 작성하기"
        actionName="저장"
        action={() => {
          onFinish();
          navigate(staticServerUri + `/points`);
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
            maxWidth: 160,
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
          onClick={() => {
            setIsMap(true);
          }}
        >
          <img
            src="./img/location.svg"
            width={24}
            height={24}
            style={{
              marginRight: 10,
            }}
          />
          <span>{pointId ? pointId.title : '장소 등록'}</span>
        </button>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          style={{
            width: '100%',
            maxWidth: 160,
            border: 'none',
            color: '#7F7F7F',
            fontSize: 18,
            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
            borderRadius: 8,
            padding: 8,
          }}
          value={category}
        >
          <option value="SNORKEL">스노클</option>
          <option value="FREEDIVING">프리다이빙</option>
          <option value="SCUBA">스쿠버</option>
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
        <div className="flex space-x-4 mx-auto justify-center">
          {[1, 2, 3, 4, 5].map((el) => (
            <img
              key={el}
              onClick={() => handleStarClick(el)}
              src={star[el] ? './img/active-star.svg' : './img/star.svg'}
              style={{
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
          overflow: 'hidden',
          color: '#7F7F7F',
          width: '100%',
          height: 352,
          textAlign: 'center',
          fontSize: 18,
          lineHeight: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {preImg ? (
          <img src={preImg} width="100%" height="100%" />
        ) : (
          <div
            style={{
              marginTop: 28,
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
              <img src="./img/plus.svg" width={28} height={28} />
            </div>
          </div>
        )}
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
      <Section>
        <textarea
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
      {category !== 'SNORKEL' && (
        <Section title="입수형태">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            className=" space-x-2 w-full"
          >
            <div className="w-full">
              <input
                type="radio"
                id="BEATCH"
                value="BEATCH"
                checked={diveEntry === 'BEATCH'}
                onClick={handleOptionChange}
              />
              <label for="BEATCH" style={{ padding: '8px 0' }} className="w-full">
                해안
              </label>
            </div>
            <div className="w-full">
              <input
                type="radio"
                id="BOAT"
                value="BOAT"
                checked={diveEntry === 'BOAT'}
                onClick={handleOptionChange}
              />
              <label for="BOAT" style={{ padding: '8px 0' }} className="w-full">
                보트
              </label>
            </div>
            <div className="w-full">
              <input
                type="radio"
                value="ETC"
                id="ETC"
                checked={diveEntry === 'ETC'}
                onClick={handleOptionChange}
              />
              <label for="ETC" style={{ padding: '8px 0' }} className="w-full">
                기타
              </label>
            </div>
          </div>
        </Section>
      )}
      {category !== 'SNORKEL' && (
        <Section title="수면해류">
          <div style={{ display: 'flex', justifyContent: 'space-between' }} className=" space-x-2">
            <div className="w-full">
              <input
                type="radio"
                id="STRONG"
                value="STRONG"
                checked={surfaceFlow === 'STRONG'}
                onClick={handleOptionChange2}
              />
              <label for="STRONG" style={{ padding: '8px 0' }} className="w-full">
                강한해류
              </label>
            </div>
            <div className="w-full">
              <input
                type="radio"
                value="MIDDLE"
                id="MIDDLE"
                checked={surfaceFlow === 'MIDDLE'}
                onClick={handleOptionChange2}
              />
              <label for="MIDDLE" style={{ padding: '8px 0' }} className="w-full">
                보통해류
              </label>
            </div>
            <div className="w-full">
              <input
                type="radio"
                id="WEEK"
                value="WEEK"
                checked={surfaceFlow === 'WEEK'}
                onClick={handleOptionChange2}
              />
              <label for="WEEK" style={{ padding: '8px 0' }} className="w-full">
                약한해류
              </label>
            </div>
          </div>
        </Section>
      )}
      {category !== 'SNORKEL' && (
        <Section title="심층해류">
          <div style={{ display: 'flex', justifyContent: 'space-between' }} className="space-x-2">
            <div className="w-full">
              <input
                type="radio"
                id="STRONG2"
                value="STRONG"
                checked={deepFlow === 'STRONG'}
                onClick={handleOptionChange3}
              />
              <label for="STRONG2" style={{ padding: '8px 0' }} className="w-full">
                강한해류
              </label>
            </div>
            <div className="w-full">
              <input
                type="radio"
                id="MIDDLE2"
                value="MIDDLE"
                checked={deepFlow === 'MIDDLE'}
                onClick={handleOptionChange3}
              />
              <label for="MIDDLE2" style={{ padding: '8px 0' }} className="w-full">
                보통해류
              </label>
            </div>
            <div className="w-full">
              <input
                type="radio"
                value="WEEK"
                id="WEEK2"
                checked={deepFlow === 'WEEK'}
                onClick={handleOptionChange3}
              />
              <label for="WEEK2" style={{ padding: '8px 0' }} className="w-full">
                약한해류
              </label>
            </div>
          </div>
        </Section>
      )}
      {category !== 'SNORKEL' && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="space-x-4">
          <Section title="수온">
            <div
              style={{
                border: 'none',
                height: 56,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: 8,
                position: 'relative',
                padding: '12px',
                maxWidth: 164,
              }}
              className="w-full"
            >
              <input
                name="waterTemp"
                style={{
                  border: 'none',
                  width: '100%',
                  height: '100%',
                  outline: 'none',
                }}
                placeholder="수온"
                onChange={(e) => {
                  setWaterTemp(e.target.value);
                }}
                type="number"
                value={waterTemp}
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
                border: 'none',
                height: 56,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: 8,
                position: 'relative',
                padding: '12px',
                maxWidth: 164,
              }}
            >
              <input
                name="temp"
                style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
                placeholder="기온"
                type="number"
                onChange={(e) => {
                  setTemp(e.target.value);
                }}
                value={temp}
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
      )}
      {category !== 'SNORKEL' && category !== 'FREEDIVING' && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="space-x-4">
          <Section title="입수전 잔량">
            <div
              style={{
                border: 'none',
                height: 56,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: 8,
                position: 'relative',
                padding: 12,
                maxWidth: 164,
              }}
            >
              <input
                name="beforeIntake"
                placeholder="입수전 잔량"
                type="number"
                style={{
                  border: 'none',
                  width: '100%',
                  height: '100%',
                  outline: 'none',
                }}
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
                border: 'none',
                height: 56,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: 8,
                position: 'relative',
                padding: 12,
                maxWidth: 164,
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
      )}
      {category !== 'SNORKEL' && category !== 'FREEDIVING' && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className=" space-x-4">
          <Section title="다이브 최고수심">
            <div
              style={{
                border: 'none',
                height: 56,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: 8,
                position: 'relative',
                padding: 12,
                maxWidth: 164,
              }}
            >
              <input
                name="maxDepth"
                style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
                placeholder="다이브 최고수심"
                type="number"
                onChange={(e) => {
                  setMaxDepth(e.target.value);
                }}
                value={maxDepth}
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
                border: 'none',
                height: 56,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: 8,
                position: 'relative',
                padding: 12,
                maxWidth: 164,
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
      )}
      {category !== 'SNORKEL' && category !== 'FREEDIVING' && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className=" space-x-4">
          <Section title="다이빙 시간">
            <div
              style={{
                border: 'none',
                height: 56,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: 8,
                position: 'relative',
                padding: 12,
                maxWidth: 164,
              }}
            >
              <input
                name="diveTime"
                placeholder="다이빙 시간"
                style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
                onChange={(e) => {
                  setDiveTime(e.target.value);
                }}
                value={diveTime}
              />
              <div
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 21,
                }}
              >
                분
              </div>
            </div>
          </Section>
          <Section title="감압 시간">
            <div
              style={{
                border: 'none',
                height: 56,
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: 8,
                position: 'relative',
                padding: 12,
                maxWidth: 164,
              }}
            >
              <input
                name="decompression"
                placeholder="감압 시간"
                style={{ border: 'none', width: '100%', height: '100%', outline: 'none' }}
                onChange={(e) => {
                  setDecompression(e.target.value);
                }}
                value={decompression}
              />
              <div
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 21,
                }}
              >
                분
              </div>
            </div>
          </Section>
        </div>
      )}
      {category !== 'SNORKEL' && (
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
      )}
    </div>
  );
};

export default Write;
