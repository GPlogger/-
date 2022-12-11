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
    console.log(scheduleList);
    console.log(distances);
    setScheduleList(scheduleList.filter((item) => item.id !== props.id));
    let totalTmp = schedule.total;
    let timeTmp = schedule.time;
    setSchedule({
      time: timeTmp - props.time,
      total: totalTmp - 1,
    });
    if (scheduleList.length === 1){
      setPaths([]);
      setDistances([]);
    } else {

      setPaths(paths.filter((item, idx) => props.idx !== idx));
          
          if (distances.length <= 1) {
          } else if (distances.length === props.idx + 1) {
            setDistances(distances.filter((item, idx) => props.idx !== idx));
            console.log(distances);
            console.log(props.idx);
          } else {
            setDistances(distances.filter((item, idx) => props.idx + 1 !== idx));
          }
        }
  };

  return (
    <Wrapper>
      <VscChromeClose onClick={removeList} />
    </Wrapper>
  );
}
export default MoveButtonBox;
