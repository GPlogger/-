import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { positionState, levelState } from "../recoil/MapStates";

const { kakao } = window;

function KakaoMapContainer() {
  // recoil 전역변수 사용
  const positionG = useRecoilValue(positionState);
  const levelG = useRecoilValue(levelState);

  const [map, setMap] = useState(null);

  // useEffect(() => {
  //   const container = document.getElementById("map");
  //   const options = {
  //     center: new kakao.maps.LatLng(33.37055326804881, 126.53223166774146),
  //     level: levelG,
  //   };
  //   const map = new kakao.maps.Map(container, options);
  //   setMap(map);
  // }, []);

  function panTo() {
    // 이동할 위도 경도 위치를 생성합니다
    var moveLatLon = new kakao.maps.LatLng(positionG[0], positionG[1]);

    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
  }
  
  return (
    <Wrapper>
      <Map
        center={{ lat: 33.37055326804881, lng: 126.53223166774146 }}
        style={{ width: "1307px", height: "852px" }}
        level = {9}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
    </Wrapper>
  );
}

export default KakaoMapContainer;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
