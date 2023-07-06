import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const KakaoMap = ({ title, id, action }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window.kakao !== 'undefined' && window.kakao.maps) {
      let markers = [];
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 10,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      let positions = [
        {
          id: 1,
          title: '판포포구',
          content: '<div>판포포구</div>',
          latlng: new kakao.maps.LatLng(33.365216, 126.200269),
        },
        {
          id: 2,
          title: '월령포구',
          content: '<div>월령포구</div>',
          latlng: new kakao.maps.LatLng(33.378558, 126.21632),
        },
        {
          id: 3,
          title: '범섬',
          content: '<div>범섬</div>',
          latlng: new kakao.maps.LatLng(33.218354, 126.516717),
        },
        {
          id: 4,
          title: '월평포구',
          content: '<div>월평포구</div>',
          latlng: new kakao.maps.LatLng(33.234152, 126.463248),
        },
        {
          id: 5,
          title: '황우지선녀탕',
          content: '<div>황우지선녀탕</div>',
          latlng: new kakao.maps.LatLng(33.239479, 126.548912),
        },
        {
          id: 6,
          title: '김녕해변',
          content: '<div>김녕해변</div>',
          latlng: new kakao.maps.LatLng(33.557752, 126.758989),
        },
        {
          id: 7,
          title: '중문해수욕장',
          content: '<div>중문해수욕장</div>',
          latlng: new kakao.maps.LatLng(33.243064, 126.412131),
        },
        {
          id: 8,
          title: '함덕해변',
          content: '<div>함덕해변</div>',
          latlng: new kakao.maps.LatLng(33.543495, 126.669673),
        },
        {
          id: 9,
          title: '이호테우해변',
          content: '<div>이호테우해변</div>',
          latlng: new kakao.maps.LatLng(33.498197, 126.45293),
        },
        {
          id: 10,
          title: '협재해변',
          content: '<div>협재해변</div>',
          latlng: new kakao.maps.LatLng(33.39439, 126.239582),
        },
      ];

      for (let i = 0; i < positions.length; i++) {
        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커의 위치
        });

        // 클릭 이벤트 핸들러를 등록합니다
        kakao.maps.event.addListener(marker, 'click', () => {
          const queryParams = new URLSearchParams({ point: positions[i].id });
          if (action) {
            action(positions[i]);
          } else {
            navigate(`/feed?${queryParams.toString()}`, {
              state: { feed: positions[i] },
            });
          }
        });

        // 마커에 표시할 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
          content: positions[i].content, // 인포윈도우에 표시할 내용
        });

        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
        function makeOverListener(map, marker, infowindow) {
          return function () {
            infowindow.open(map, marker);
          };
        }

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다
        function makeOutListener(infowindow) {
          return function () {
            infowindow.close();
          };
        }

        kakao.maps.event.addListener(
          marker,
          'mouseover',
          makeOverListener(map, marker, infowindow),
        );
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const locPosition = new window.kakao.maps.LatLng(lat, lon);
          const message = '<div style="padding:6px;">현재위치</div>';
          displayMarker(locPosition, message);
        });
      } else {
        const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
        const message = '현재위치를 찾을 수 없어요..';
        displayMarker(locPosition, message);
      }

      function displayMarker(locPosition, message) {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: locPosition,
        });

        const iwContent = message;
        const iwRemoveable = true;

        const infowindow = new window.kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        infowindow.open(map, marker);
        map.setCenter(locPosition);
      }
    }
  }, [navigate]);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '800px',
        margin: '0 auto',
        position: 'relative',
      }}
    ></div>
  );
};

export default KakaoMap;
