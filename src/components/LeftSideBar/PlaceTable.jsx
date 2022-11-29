import React from "react";
import styled from "styled-components";
import { IoInformationSharp, IoAddOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { positionState, levelState, mapState } from "../recoil/MapStates";
import { ScheduleState,  } from "../recoil/Schedulestate";

function PlaceTable(props) {
  const [state, setState] = useRecoilState(mapState);
  const [schedule, setSchedule] = useRecoilState(ScheduleState);
  const setMap = () => {
    setState({
      center: props.position,
      isPanto: true,
      position: props.position,
      name: props.name,
    });
  };


  const setScheduleBar = () => {
    let count = schedule;
    setSchedule({
        title: count.title,
        time: count.time + props.time,       // 전체 시간 증가
        total: count.total + 1,     // 전체 장소 증가
    })
    console.log(props.time);
    // setTotalCount(prev => prev+1);
    // setTotalTime(time + props.time);
    // setTest(prev => prev+1)
    // console.log(test);
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
            <IoAddOutline onClick={setScheduleBar}/>
          </PlaceButtons>
        </PlaceInfo>
      </PlaceList>
    </Wrapper>
  );
}

export default PlaceTable;
const Title = styled.h4`
  padding-bottom: 5px;
`
const Subtitle = styled.h5`
  padding-bottom: 3px;
`


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 87.8%;
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