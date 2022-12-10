import React, { useState, useEffect } from "react";
import { Map, MapMarker, Polyline, CustomOverlayMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { positionState, levelState, centerState, mapState, lineState, pathState, distancesState, isScheduleState, placePositionState } from "../recoil/MapStates";

function KakaoMapContainer() {
  // 지도 정보
  const [state, setState] = useRecoilState(mapState);
  // 지도에 표시할 직선 정보
  
//////////////////////////////////////// setline ///////
  const [isdrawing, setIsdrawing] = useState(false) // 그려지는 중인지 표시
  const [clickLine, setClickLine] = useState()  //  클릭한 좌표로 그려질 선 객체
  // const [clickLine, setClickLine] = useRecoilState(placePositionState)  //  클릭한 좌표로 그려질 선 객체
  const [paths, setPaths] = useRecoilState(pathState)    // 
  const [distances, setDistances] = useRecoilState(distancesState)  // 선의 거리정보 표시할 커스텀 오버레이
  const [mousePosition, setMousePosition] = useState({  // 선이 그려지고 있을 때 클릭할 때마다 클릭 지점과 거리 표시하는 오버레이
    lat: 0,
    lng: 0,
  })
  const [placePostion, setPlacePostion] = useRecoilState(placePositionState);


  const [isSchedule, setIsSchedule] = useRecoilState(isScheduleState);

  const [moveLine, setMoveLine] = useState()

  const add = arr => arr.reduce((a, b) => a + b, 0);
  var sum = add(distances.slice(1, distances.length));
  // const handleClick = (   // 마우스 왼쪽 클릭시
  //   _map,
  //   mouseEvent
  // ) => {
  //   if (!isdrawing) {   // 그리고 있는 상태가 아니라면 현재 상태 초기화
  //     setDistances([])   
  //     setPaths([])
  //   }

  //   // 그리고 있는 상태라면
  //   setPaths((prev) => [  // Path에 클릭한 좌표 추가
  //     ...prev,
  //     {
  //       lat: mouseEvent.latLng.getLat(),  // 전에 것에 마우스 클릭 시 위도 받아옴
  //       lng: mouseEvent.latLng.getLng(),  // 전에 것에 마우스 클릭 시 경도 받아옴
  //     },
  //   ])

  //   setDistances((prev) => [  //distance에 클릭한 좌표의 경도, 위도 표시
  //     ...prev,
  //     // Math.round(clickLine.getLength() + moveLine.getLength()),
  //   ])
  //   setIsdrawing(true)    // 
    
  // }


  const DistanceInfo = ({ distance }) => {
    const walkkTime = (distance / 600) | 0
    const bycicleTime = (distance / 227) | 0

   return (
      <ul className="dotOverlay distanceInfo">
        <li>
          <span className="label">총거리</span>{" "}
          <span className="number">{sum}</span>m
        </li>
        <li>
          <span className="label">자동차</span>{" "}
          {walkkTime > 60 && (
            <>
              <span className="number">{Math.floor(walkkTime / 60)}</span> 시간{" "}
            </>
          )}
          <span className="number">{walkkTime % 60}</span> 분
        </li>
        <li>
          <span className="label">자전거</span>{" "}
          {bycicleTime > 60 && (
            <>
              <span className="number">{Math.floor(bycicleTime / 60)}</span>{" "}
              시간{" "}
            </>
          )}
          <span className="number">{bycicleTime % 60}</span> 분
        </li>
      </ul>
    )
  }



  return (
    <Wrapper>
      {/* <CalculatePolylineDistanceStyle /> */}
      <Map
        center={state.center} // 중심좌표
        isPanto={state.isPanto}
        style={{ width: "100%", height: "100%" }} // 지도크기
        level={9} // 확대레벨
        // onClick={handleClick}
        // onRightClick={handleRightClick}
        // onMouseMove={handleMouseMove}
      >
 <Polyline
          path={paths}
          strokeWeight={3} // 선의 두께입니다
          strokeColor={"#db4040"} // 선의 색깔입니다
          strokeOpacity={1} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
          strokeStyle={"solid"} // 선의 스타일입니다
          // onCreate={setClickLine}
        />

        
        {paths.map((path) => (
          <CustomOverlayMap
            key={`dot-${path.lat},${path.lng}`}
            position={path}
            zIndex={3}
          >
            <span className="dot"></span>
          </CustomOverlayMap>
        ))}


        {paths.length > 1 &&
          distances.slice(1, distances.length).map((distance, index) => (
            <CustomOverlayMap
              key={`distance-${paths[index + 1].lat},${paths[index + 1].lng}`}
              position={paths[index + 1]}
              yAnchor={0.1}
              zIndex={2}
            >
              {isSchedule && distances.length === index + 2 ? (  //
              // {!isSchedule && distances.length === index +2? (  //
                <DistanceInfo distance={distance} />
              ) : (
                <div className="dotOverlay">
                  거리 <span className="number">{distance}</span>m
                </div>
              )}
            </CustomOverlayMap>
          ))}



        <Polyline
          path={isSchedule ? [paths[paths.length - 1], placePostion] : []}  // 그리고 있는 상태면 
          strokeWeight={3} // 선의 두께입니다
          strokeColor={"#db4040"} // 선의 색깔입니다
          strokeOpacity={0.5} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
          strokeStyle={"solid"} // 선의 스타일입니다
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
