import React, { useState, useEffect } from "react";
import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { positionState, levelState, centerState, mapState, lineState } from "../recoil/MapStates";

function KakaoMapContainer() {
  // 지도 정보
  const [state, setState] = useRecoilState(mapState);
  // 지도에 표시할 직선 정보
  const line = useRecoilValue(lineState);
  
console.log(line);

  return (
    <Wrapper>
      <Map
        center={state.center} // 중심좌표
        isPanto={state.isPanto}
        style={{ width: "100%", height: "100%" }} // 지도크기
        // style={{ width: "1307px", height: "863px" }}  // 지도크기
        level={9} // 확대레벨
      >
        <Polyline     // 경로 선긋기

          path={
            line
          }
          strokeWeight={5} // 선의 두께 입니다
          strokeColor={"#ff0000"} // 선의 색깔입니다
          strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={"solid"} // 선의 스타일입니다
        />

        <MapMarker position={state.position}>
          <div
            style={{
              width: "148px",
              padding: "5px",
              color: "#000",
              textAlign: "center",
            }}
          >
            {state.name} <br />
          </div>
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
  font-family: "GmarketSans"
`;
