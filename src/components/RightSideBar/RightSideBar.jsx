import React from "react";
import styled from "styled-components";
import ScheduleTable from "./ScheduleTable";
import TotalTime from "./TotalTime";
import { useRecoilValue } from "recoil";
import { ScheduleListState } from "../recoil/Schedulestate";


function RightSideBar(props) {

  const scheduleList = useRecoilValue(ScheduleListState);

  return (
    <Wrapper>
      <TotalTime/>
      {scheduleList.map((item) => (
        <ScheduleTable
        key={item.id}  
        id = {item.id}
        title={item.title}
        time={item.time}
        moveTime={item.moveTime}
        />
      ))}
    </Wrapper>
  );
}

export default RightSideBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 300px;
  height: 100%;
  background-color: #fff;
`;