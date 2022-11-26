import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { positionState, levelState, centerState, mapState } from "../recoil/MapStates";

function KakaoMapContainer() {
  // recoil 변수
  const [state, setState] = useRecoilState(mapState);


  return (
    <Wrapper>   
      <Map
        center={state.center}     // 중심좌표
        isPanto={state.isPanto}
        style={{ width: "1307px", height: "863px" }}  // 지도크기
        level={9}   // 확대레벨
      >
        <MapMarker position={state.position}>

        <div style={{ padding: "5px", color: '#000'}}>야호 <br /></div>
        </MapMarker>
        
        {/* {state.position && <MapMarker position={state.position} />} */}

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
