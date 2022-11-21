import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { positionState, levelState, centerState, mapState } from "../recoil/MapStates";

function KakaoMapContainer() {
  // recoil 전역변수 사용
  const centerG = useRecoilValue(centerState);
  const positionG = useRecoilValue(positionState);
  const levelG = useRecoilValue(levelState);
  

  const [map, setMap] = useState(null);



  // // 지도의 위치 State
  // const [state, setState] = useState({
  //   // 지도의 초기 위치
  //   center: centerG,
  //   // 지도 위치 변경 시 panto를 이용할지
  //   isPanto: true,
  //   position: positionG,
  // });

  const [state, setState] = useRecoilState(mapState);

  // 지도 마커 State
  // const [position, setPosition] = useState();

  return (
    <Wrapper>
      <Map
        center={state.center}
        isPanto={state.isPanto}
        style={{ width: "1307px", height: "857px" }}
        level={9}
      >
        {state.position && <MapMarker position={state.position} />}

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
