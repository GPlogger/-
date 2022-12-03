import React from "react";
import styled from "styled-components";
import { IoInformationSharp, IoAddOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { positionState, levelState, mapState } from "../recoil/MapStates";
import { ScheduleListState, ScheduleState } from "../recoil/Schedulestate";

function PlaceTable(props) {
  const [state, setState] = useRecoilState(mapState);
  const [schedule, setSchedule] = useRecoilState(ScheduleState);
  const [scheduleList, setScheduleList] = useRecoilState(ScheduleListState);
  const setMap = () => {
    setState({
      center: props.position,
      isPanto: true,
      position: props.position,
      name: props.name,
    });
  };

  const setScheduleBar = () => {
    // 스케줄 총 시간 변경
    // let count = schedule;
    // setSchedule({
    //     time: count.time + props.time,       // 전체 시간 증가
    //     total: count.total + 1,     // 전체 장소 증가
    // })

    // let idx = 0;
    // let obj = {title:"여행지", time:50, moveTime:0};
    // let list = scheduleList;
    // list = scheduleList[scheduleList.length] = obj;
    // setScheduleList(list);
    // 스케줄 테이블의 시간 변경
    setSchedule({
      time: schedule.time + props.time,
      total: schedule.total + 1,
    });
    setScheduleList(
      scheduleList.concat({
        id: props.id,
        title: props.name,
        time: props.time,
        moveTime: 0,
      })
    );
    console.log(schedule);
    console.log(scheduleList);
  };

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
