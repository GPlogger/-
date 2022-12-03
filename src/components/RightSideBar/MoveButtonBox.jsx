import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { ScheduleState, ScheduleListState } from "../recoil/Schedulestate";

import { VscChevronUp, VscChromeClose, VscChevronDown } from "react-icons/vsc";

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

  const removeList = () => {
    setScheduleList(scheduleList.filter((item) => item.id !== props.id));
    console.log(scheduleList);
  };
  return (
    <Wrapper>
      <VscChevronUp />
      <VscChromeClose onClick={removeList} />
      <VscChevronDown />
    </Wrapper>
  );
}
export default MoveButtonBox;
