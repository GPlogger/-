import React from "react";
import styled from "styled-components";
import { IoInformationSharp, IoAddOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { mapState, placePositionState, isScheduleState, distancesState, pathState } from "../recoil/MapStates";
import { ScheduleListState, ScheduleState } from "../recoil/Schedulestate";


function PlaceTable(props) {


  // 지도 마커 변경
  const [state, setState] = useRecoilState(mapState);
  // 전체 스케줄 시간과 장소 변경
  const [schedule, setSchedule] = useRecoilState(ScheduleState);
  // 스케줄리스트의 배열 추가
  const [scheduleList, setScheduleList] = useRecoilState(ScheduleListState);
  // 스케줄 추가 시 맵 선을 긋기 위한 좌표 추가
  const [placePostion, setPlacePostion] = useRecoilState(placePositionState);
  // 스케줄이 2개 이상일 시 경로 표시 컨트롤을 위한 boolean
  const [isSchedule, setIsSchedule] = useRecoilState(isScheduleState);
  // 지도에 표시할 거리
  const [distances, setDistance] = useRecoilState(distancesState);
  // 지도에 표시할 선의 경로
  const [paths, setPaths] = useRecoilState(pathState);

  // 스케줄에 표시할 도착예상시간 리스트



/** 첫 장소의 좌표와 다음 좌표의 거리를 반환*/
  function getDistanceBetweenPlaces(lat1, lng1, lat2, lng2) {
    let theta = lng1 - lng2;
    let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
        Math.sin(lat1 * (Math.PI/180)) * Math.sin(lat2 * (Math.PI/180)) + 
        Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
    );
    return Math.round(distance * 1609.344, 2);
  };


  const setMap = () => {
    setState({
      center: props.position,
      isPanto: true,
      position: props.position,
      name: props.name,
    });
  };

  const setScheduleBar = () => {
    setSchedule({
      time: schedule.time + props.time,
      total: schedule.total + 1,
    });

    setScheduleList(
      scheduleList.concat({
        id: props.id,
        title: props.name,
        time: props.time,
        moveTime: 0, // 이동 시간
      })
    );

    // 지도 선 긋기 위한 전역변수 세팅

    setPaths((prev) => [
      ...prev,
      {
        lat: props.position.lat,
        lng: props.position.lng,
      },
    ]);



    // if(scheduleList.length > 1){  // 추가된 스케줄이 2개 이상이면
    setIsSchedule(true);
    //  Distance = 첫번째 장소의 lat, lng , 두번째 장소의 lat, lng

    // console.log(distance);
    // } else {
    //   setIsSchedule(false)
    // }

    setPlacePostion({
      // 선 긋기에 표시할 포지션,
      lat: props.position.lat,
      lng: props.position.lng,
    });

    
    let dis = getDistanceBetweenPlaces(
      placePostion.lat,
      placePostion.lng,
      props.position.lat,
      props.position.lng
      );
      
      setDistance((prev) => [...prev, dis]);
      
      console.log(distances);
    
  };



  // 이거 추가하면 오류 씨게남 이유 모르겠슴
  
  // const scList = distances.map((item) => 
  // (item/600/60) + (item / 600 % 60)
  // )

  // setScheduleList(scList);

  return (
    <Wrapper>
      <PlaceList>
        <PlaceImg src={props.img} alt={props.name} />
        <PlaceInfo onClick={setMap}>
          <Title>{props.name}</Title>
          <Subtitle>{props.tag}</Subtitle>
          <PlaceButtons>
            <a href={props.link} target={"_blank"}>
              <IoInformationSharp />
            </a>
            <IoAddOutline onClick={setScheduleBar} />
          </PlaceButtons>
        </PlaceInfo>
      </PlaceList>
    </Wrapper>
  );
}

export default PlaceTable;
const Title = styled.h4`
  padding-bottom: 5px;
`;
const Subtitle = styled.h5`
  padding-bottom: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 87.8%; */
  /* padding: 10px; */
  margin: 9px 9px 0px;
`;

const PlaceList = styled.div`
  display: flex;
  flex-direction: row;
  height: 96px;
  width: 275px;
  background-color: white;
  /* align-content: center; */
  align-items: center; //
  justify-content: center;
  box-shadow: 5px 15px 5px -10px #e4e4e4;
  border-radius: 7px;
  cursor: pointer;
  :hover {
    border: rgb(42, 134, 129) 2px solid;
    /* transform: scale(1); */
  }
`;

// const PlaceImg = styled.img`
//   margin: 3px;
//   width: 90px;
//   height: 90px;
// `;

const PlaceImg = styled.img`
  align-items: center;
  justify-content: center;
  /* margin: 3px; */
  width: 90px;
  height: 90px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px;
  width: 165px;
  justify-content: space-between;
  background-color: white;
  cursor: pointer;
`;

const PlaceButtons = styled.div`
  width: 100%;
  height: 20%;
  text-align: right;

  background-color: white;
`;
