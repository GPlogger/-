import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { positionState, levelState } from "../recoil/MapStates";


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
  const [state, setState] = useState({
    // 지도의 초기 위치
        center:{ lat: 33.37055326804881, lng: 126.53223166774146 },
        // 지도 위치 변경 시 panto를 이용할지
        isPanto: true,
  })


  
  return (
    <Wrapper>
      <button onClick={() => 
      setState({
        center: {lat: 33.45058, lng: 126.574942},
        isPanto: true,
      })}>이동테스트1
      </button>
      <button onClick={() => 
      setState({
        center: {lat: 33.37055326804881, lng: 126.53223166774146},
        isPanto: true,
      })}>이동테스트2
      </button>
      <Map
        center={state.center}
        isPanto={state.isPanto}
        style={{ width: "1307px", height: "810px" }}
        // style={{ width: "1307px", height: "852px" }} //컴퓨터
        // style={{ width: "1307px", height: "857px" }} //노트북
        level = {6}
      >


        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>월정리해변</div>
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
