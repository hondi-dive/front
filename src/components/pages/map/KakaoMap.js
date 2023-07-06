import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    if (typeof window.kakao !== 'undefined' && window.kakao.maps) {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

    let positions = [
        {
            content: '<div>판포포구</div>', 
            latlng: new kakao.maps.LatLng(33.365216, 126.200269)
        },
        {
            content: '<div>월령포구</div>', 
            latlng: new kakao.maps.LatLng(33.378558, 126.216320)
        },
        {
            content: '<div>범섬</div>', 
            latlng: new kakao.maps.LatLng(33.218354, 126.516717)
        },
        {
            content: '<div>중문해수욕장</div>',
            latlng: new kakao.maps.LatLng(33.244914, 126.411545)
        }
    ];

    for (let i = 0; i < positions.length; i ++) {
        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng // 마커의 위치
        });
    
        // 마커에 표시할 인포윈도우를 생성합니다 
        let infowindow = new kakao.maps.InfoWindow({
            content: positions[i].content // 인포윈도우에 표시할 내용
        });

        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
        function makeOverListener(map, marker, infowindow) {
            return function() {
                infowindow.open(map, marker);
            };
        }

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
        function makeOutListener(infowindow) {
            return function() {
                infowindow.close();
            };
        }

        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
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
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '411px',
        height: '800px',
        margin: '0 auto',
      }}
    ></div>
  );
};

export default KakaoMap;
