import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { ScheduleState, ScheduleListState } from "../recoil/Schedulestate";

import { VscChevronUp, VscChromeClose, VscChevronDown } from "react-icons/vsc";
import { distancesState, pathState } from "../recoil/MapStates";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  width: 10%;
  background-color: yellow;
  justify-content: center;
  align-items: center;
`;

function MoveButtonBox(props) {
  const [scheduleList, setScheduleList] = useRecoilState(ScheduleListState);
  const [schedule, setSchedule] = useRecoilState(ScheduleState);
  const [paths, setPaths] = useRecoilState(pathState);
  const [distances, setDistances] = useRecoilState(distancesState);

  const removeList = () => {
    setScheduleList(scheduleList.filter((item) => item.id !== props.id));
    let totalTmp = schedule.total;
    let timeTmp = schedule.time;
    setSchedule({
      time: timeTmp - props.time,
      total: totalTmp - 1,
    });
    if (setScheduleList.length === 1){
      setPaths([]);
      setDistances([]);
    } else {

      setPaths(paths.filter((item, idx) => props.idx !== idx));
      // if (distances.length !== 1 && distances.length === props.idx + 1) {
        //   console.log(distances);
        //   setDistances(distances.filter((item, idx) => props.idx !== idx));
        // } else {
          //   setDistances(distances.filter((item, idx) => props.idx + 1 !== idx));
          
          
          
          
          
          if (distances.length <= 1) {
          } else if (distances.length === props.idx + 1) {
            setDistances(distances.filter((item, idx) => props.idx !== idx));
            console.log(distances);
            console.log(props.idx);
          } else {
            setDistances(distances.filter((item, idx) => props.idx + 1 !== idx));
          }
        }
          
    // if (scheduleList.length === 0) {
    // }
    // console.log(distances);
  };

  const moveUp = () => {
    console.log(distances);
    console.log(scheduleList);

    // console.log(scheduleList);
    // if (Number(props.idx) !== 0) {
    //   let temp = scheduleList.splice(Number(props.idx), 1);
    //   setScheduleList(scheduleList.splice(Number(props.idx) - 1, 0, temp));
    // }
  };
  const moveDown = () => {};

  return (
    <Wrapper>
      <VscChevronUp onClick={moveUp} />
      <VscChromeClose onClick={removeList} />
      <VscChevronDown onClick={moveDown} />
    </Wrapper>
  );
}
export default MoveButtonBox;
