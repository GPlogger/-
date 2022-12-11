import React, { useState, useEffect } from "react";
import {
  Map,
  MapMarker,
  Polyline,
  CustomOverlayMap,
} from "react-kakao-maps-sdk";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  positionState,
  levelState,
  centerState,
  mapState,
  lineState,
  pathState,
  distancesState,
  isScheduleState,
  placePositionState,
} from "../recoil/MapStates";

function KakaoMapContainer() {
  // 지도 정보
  const [state, setState] = useRecoilState(mapState);
  // 지도에 표시할 직선 정보

  //////////////////////////////////////// setline ///////
  const [paths, setPaths] = useRecoilState(pathState); //
  const [distances, setDistances] = useRecoilState(distancesState); // 선의 거리정보 표시할 커스텀 오버레이

  const [placePostion, setPlacePostion] = useRecoilState(placePositionState);

  const [isSchedule, setIsSchedule] = useRecoilState(isScheduleState);

  const add = (arr) => arr.reduce((a, b) => a + b, 0);
  var sum = add(distances.slice(1, distances.length));

  const DistanceInfo = ({ distance }) => {
    const carkTime = (sum / 600) | 0;

    return (
      <Ul className="dotOverlay distanceInfo" style={{ listStyle: "none" }}>
        {/* <ul className="dotOverlay distanceInfo" style={{"list-style":"none", "textAlign":"center"}}> */}
        <Li>
          <span className="label">총거리</span>{" "}
          <span className="number">{sum}</span>m
        </Li>
        <Li>
          <span className="label">예상도착시간</span>{" "}
          {carkTime > 60 && (
            <>
              <span className="number">{Math.floor(carkTime / 60)}</span> 시간{" "}
            </>
          )}
          <span className="number">{carkTime % 60}</span> 분
        </Li>
      </Ul>
    );
  };

  return (
    <Wrapper>
      <Map
        center={state.center} // 중심좌표
        isPanto={state.isPanto}
        style={{ width: "100%", height: "100%" }} // 지도크기
        level={9} // 확대레벨
      >
        <Polyline
          path={paths}
          strokeWeight={2} // 선의 두께
          strokeColor={`#ff4848e6`} // 선의 색깔
          strokeOpacity={1} // 선의 불투명도
          strokeStyle={"solid"} // 선의 스타일
        />

        {paths.map((path) => (
          <CustomOverlayMap
            key={`dot-${path.lat},${path.lng}`}
            position={path}
            zIndex={3}
          >
            <span
              className="dot"
              style={{
                width: "20px",
                height: "20px",
                background:
                  "url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/mini_circle.png)",
              }}
            ></span>
          </CustomOverlayMap>
        ))}

        {paths.length > 1 &&
          distances.slice(1, distances.length).map((distance, index) => (
            <CustomOverlayMap
              key={`distance-${paths[index + 1].lat},${paths[index + 1].lng}`}
              position={paths[index + 1]}
              yAnchor={-0.1}
              zIndex={2}
            >
              {isSchedule && distances.length === index + 2 ? ( //
                <DistanceInfo distance={distance} />
              ) : (
                <DistanceInfo_ className="dotOverlay">
                  거리 <span className="number">{distance}</span>m
                </DistanceInfo_>
              )}
            </CustomOverlayMap>
          ))}

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
      </Map>
    </Wrapper>
  );
}

export default KakaoMapContainer;

const DistanceInfo_ = styled.div`
  color: #000;
  position: relative;
  bottom: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  float: left;
  font-size: 12px;
  padding: 5px;
  background: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-family: "GmarketSans";
`;
const Ul = styled.ul`
  list-style: none;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 1px 1px 6px -3px grey;
`;
const Li = styled.li`
  font-size: 13px;
`;
