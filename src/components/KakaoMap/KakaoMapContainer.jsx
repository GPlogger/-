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
      <ul className="dotOverlay distanceInfo">
        {/* <ul className="dotOverlay distanceInfo" style={{"list-style":"none", "textAlign":"center"}}> */}
        <li>
          <span className="label">총거리</span>{" "}
          <span className="number">{sum}</span>m
        </li>
        <li>
          <span className="label">예상도착시간</span>{" "}
          {carkTime > 60 && (
            <>
              <span className="number">{Math.floor(carkTime / 60)}</span> 시간{" "}
            </>
          )}
          <span className="number">{carkTime % 60}</span> 분
        </li>
      </ul>
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
          strokeWeight={3} // 선의 두께
          strokeColor={"#cf1e1e"} // 선의 색깔
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

        <Polyline
          path={isSchedule ? [paths[paths.length - 1], placePostion] : []}
          strokeWeight={3} // 선의 두께
          strokeColor={"#f5cd1e"} // 선의 색깔
          strokeOpacity={0.5} // 선의 불투명도
          strokeStyle={"solid"} // 선의 스타일
          // onCreate={setMoveLine}
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

      {/* {paths.map((path, idx)=> {

        <MapMarker
          key={`${path.title}-${position.latlng}`}
          position={position.latlng} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
          title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />;
      })} */}

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
